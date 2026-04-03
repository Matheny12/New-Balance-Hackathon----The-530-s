import os
import json
from google import genai
from google.genai import types

from services.embedding_service import embed_query
from services.vector_store import query_chunks

_client = None

def _get_client():
    """Initializes and caches the Gemini client."""
    global _client
    if _client is None:
        _client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    return _client

def generate_match(tags: list[str], liked_shoes: list[str]) -> dict:
    """Runs the RAG pipeline: embed query -> retrieve from Chroma -> generate JSON match."""
    
    search_query = f"Shoes matching these vibes: {', '.join(tags)}. Similar to: {', '.join(liked_shoes)}"
    
    query_embedding = embed_query(search_query)
    results = query_chunks(query_embedding, n_results=6)
    documents = results["documents"][0] if results["documents"] else []
    metadatas = results["metadatas"][0] if results["metadatas"] else []

    context_parts = []
    for i, (doc_text, meta) in enumerate(zip(documents, metadatas)):
        title = meta.get('title', meta.get('filename', 'Unknown Shoe'))
        img_url = meta.get('image_url', '')
        
        context_parts.append(
            f"[Shoe Option {i + 1} - {title}]\nImage URL: {img_url}\nSpecs: {doc_text}"
        )
        
    context = "\n\n---\n\n".join(context_parts)

    prompt = f"""
    You are a New Balance Footwear Expert. 
    The user is looking for shoes with these vibes: {tags}.
    During the swipe phase, they liked these models: {liked_shoes}.
    
    Based on the following database context of available shoes, pick the ONE best shoe for them.
    If the exact liked shoes aren't in the context, pick the closest match based on the vibes and specs.
    
    Database Context:
    {context}
    
    Provide your answer in strict JSON format. You MUST use the exact image_url provided in the Database Context.
    {{"shoe_name": "Name of the shoe", "image_url": "URL of the shoe image from context", "explanation": "Why it fits their style in 2 sentences."}}
    """
    
    client = _get_client()
    
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                temperature=0.7
            )
        )
        
        return json.loads(response.text)
        
    except Exception as e:
        print(f"GOOGLE API ERROR: {str(e)}")
        return {
            "shoe_name": "Error finding match",
            "image_url": "https://via.placeholder.com/300?text=Shoe+Not+Found",
            "explanation": "We encountered an error analyzing your perfect match. Please try again!"
        }
