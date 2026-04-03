import os
from services.ingest_service import ingest_folder
from services.scraper_service import ai_query_web

from google import genai
from google.genai import types

from services.embedding_service import embed_query
from services.vector_store import query_chunks
import services.ingest_service as impser

_client = None

SYSTEM_PROMPT = (
    "You are a personal shoe style profiler. "
    "Your job is to analyze a user's shoe preferences based on their likes and dislikes "
    "and build an accurate style profile/persona for them. "

    "You will receive a history of shoes the user has liked or disliked, each with attributes such as: "
    "style (e.g. sneaker, boot, loafer, heel, sandal), "
    "aesthetic (e.g. minimalist, streetwear, luxury, athletic, vintage, techwear, preppy), "
    "colorway (e.g. neutral, bold, monochrome, multicolor), "
    "brand tier (e.g. budget, mid-range, luxury), "
    "formality (e.g. casual, smart-casual, formal), "
    "and sole/silhouette type (e.g. chunky, slim, platform, flat). "

    "Based on this data, you must: "
    "1. Identify patterns in what the user consistently likes vs dislikes. "
    "2. Generate a style persona with a name (e.g. 'The Urban Minimalist', 'The Sneakerhead', 'The Classic Prep'). "
    "3. Write a short 2-3 sentence description of their style identity. "
    "4. List their top preferred attributes (e.g. prefers chunky soles, neutral colorways, streetwear aesthetic). "
    "5. List attributes they tend to avoid. "
    "6. Suggest 3 shoe archetypes or specific styles that would be a strong match for them. "

    "Always respond in structured JSON. Do not include any plain text outside of the JSON. "
    "If the user has not liked or disliked enough shoes to form a confident profile (fewer than 5 interactions), "
    "still return a JSON response but set a 'confidence' field to 'low' and note what additional data would help refine the profile. "
"JSON format: "
    "{ "
    "  'persona_name': string, "
    "  'description': string, "
    "  'confidence': 'low' | 'medium' | 'high', "
    "  'preferred_attributes': [string], "
    "  'avoided_attributes': [string], "
    "  'recommended_archetypes': [string], "
    "  'notes': string (optional, used for low confidence explanations) "
    "} "
)

def downloaddoc(query: str):
    """Search the web for relevant PDF documents and download them."""
    ai_query_web(query, "./pdfs")
    ingest_folder()
    
downloaddoc_declaration = types.FunctionDeclaration(
    name="downloaddoc",
    description="Search the web for relevant PDF documents and download them. You MUST call this tool whenever the provided context does not contain the answer to the user's question.",
    parameters=types.Schema(
        type=types.Type.OBJECT,
        properties={
            "query": types.Schema(
                type=types.Type.STRING,
                description="The exact search query to find relevant PDF documents on the web.",
            ),
        },
        required=["query"],
    ),
)

downloaddoc_tool = types.Tool(function_declarations=[downloaddoc_declaration])


def _get_client():
    global _client
    if _client is None:
        _client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    return _client


def generate_answer(query: str, document_id: str | None = None, search_depth: int = 0) -> dict:
    """Run the full RAG pipeline: embed → retrieve → generate."""
    query_embedding = embed_query(query)
    results = query_chunks(query_embedding, n_results=5, document_id=document_id)

    documents = results["documents"][0] if results["documents"] else []
    metadatas = results["metadatas"][0] if results["metadatas"] else []
    distances = results["distances"][0] if results["distances"] else []

    context_parts = []
    sources = []
    for i, (doc_text, meta, dist) in enumerate(
        zip(documents, metadatas, distances)
    ):
        context_parts.append(
            f"[Source {i + 1} - {meta['filename']}, Page {meta['page']}]\n{doc_text}"
        )
        sources.append(
            {
                "filename": meta["filename"],
                "page": meta["page"],
                "chunk_preview": (
                    doc_text[:200] + "..." if len(doc_text) > 200 else doc_text
                ),
                "exact_quote": doc_text[:100], 
                "relevance_score": round(1 - dist, 4),
                "docId": meta["document_id"],
            }
        )
    context = "\n\n---\n\n".join(context_parts)

    client = _get_client()
    
    prompt = f"""Context from documents:

{context}

---

Question: {query}"""

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
            config=types.GenerateContentConfig(
                system_instruction=SYSTEM_PROMPT,
                tools=[downloaddoc_tool],
            ),
        )
    except Exception as e:
        print(f"GOOGLE API ERROR: {str(e)}")
        return {
            "answer": f"Google API Error: {str(e)}", 
            "sources": sources
        }

    if response.candidates and response.candidates[0].content.parts:
        for part in response.candidates[0].content.parts:
            if part.function_call and part.function_call.name == "downloaddoc":
                
                if search_depth >= 5: 
                    final_prompt = prompt + "\n\n[System Note: Web search limit reached. You MUST answer the user's question using ONLY the context provided above. If the exact answer is not available, explain what the documents DO say, or state that the specific regulation wasn't found in the downloaded files. Do not refuse to answer.]"
                    
                    final_response = client.models.generate_content(
                        model="gemini-2.5-flash",
                        contents=final_prompt,
                        config=types.GenerateContentConfig(
                            system_instruction="You are a helpful assistant. Provide the best answer possible based ONLY on the provided context.",
                        )
                    )
                    return {"answer": final_response.text, "sources": sources}

                args = part.function_call.args
                search_query = args.get("query", query) if isinstance(args, dict) else getattr(args, "query", query)
                
                print(f"Gemini requested a web search for: {search_query}")
                downloaddoc(search_query)
                
                return generate_answer(query, document_id, search_depth + 1)

    try:
        return {"answer": response.text, "sources": sources}
    except ValueError:
        return {"answer": "I attempted to find the answer but encountered an error. Please try again.", "sources": sources}
