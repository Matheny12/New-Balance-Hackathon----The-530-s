from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.rag_service import generate_match
from services.embedding_service import embed_query
from services.vector_store import query_chunks

# Initialize the router first so the @router decorators work
router = APIRouter()

# --- DATA MODELS ---

class TagRequest(BaseModel):
    tags: list[str]

class MatchRequest(BaseModel):
    quiz_tags: list[str]
    liked_shoe_names: list[str]

class MatchResponse(BaseModel):
    shoe_name: str
    image_url: str
    explanation: str

# --- ENDPOINTS ---

@router.post("/api/candidates")
async def get_candidates(request: TagRequest):
    """
    Fetches 5 shoes from your scraped database that match the quiz vibes.
    If no image is found in metadata, it provides a fallback search link.
    """
    search_query = " ".join(request.tags)
    query_embedding = embed_query(search_query)
    
    # Search ChromaDB for the 5 best matching shoes
    results = query_chunks(query_embedding, n_results=5)
    
    candidates = []
    if results["documents"] and len(results["documents"]) > 0:
        for i in range(len(results["documents"][0])):
            meta = results["metadatas"][0][i]
            doc_text = results["documents"][0][i]
            
            # Tiered Image Logic: Metadata -> Fallback Placeholder
            img = meta.get("image_url")
            shoe_name = meta.get("title", "New Balance Shoe")
            
            if not img or "SEARCH_FALLBACK" in img:
                # Use a dynamic search-based placeholder if the scraper missed the image
                img = f"https://via.placeholder.com/400x300?text={shoe_name.replace(' ', '+')}"

            candidates.append({
                "name": shoe_name,
                "profile": "New Balance Database Match",
                "desc": doc_text[:150] + "...", # Snippet for the card
                "tags": request.tags,
                "image": img
            })
            
    return candidates

@router.post("/api/match", response_model=MatchResponse)
async def get_perfect_shoe(request: MatchRequest):
    if not request.liked_shoe_names:
        raise HTTPException(status_code=400, detail="User didn't like any shoes!")

    ai_result = generate_match(
        tags=request.quiz_tags, 
        liked_shoes=request.liked_shoe_names
    )
    
    # --- SAFETY CHECK ---
    # Ensure ai_result is a dictionary and has the keys we need
    # This prevents the Pydantic ValidationError
    shoe_name = ai_result.get("shoe_name") or "New Balance 530"
    image_url = ai_result.get("image_url") or "https://nb.scene7.com/is/image/NB/mr530sg_nb_02_i?$pdpflexf2$"
    explanation = ai_result.get("explanation") or "A classic choice that matches your style."

    return MatchResponse(
        shoe_name=str(shoe_name),
        image_url=str(image_url),
        explanation=str(explanation)
    )