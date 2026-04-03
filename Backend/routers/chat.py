from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.rag_service import generate_match

router = APIRouter()

class MatchRequest(BaseModel):
    quiz_tags: list[str]
    liked_shoe_names: list[str]

class MatchResponse(BaseModel):
    shoe_name: str
    image_url: str
    explanation: str

@router.post("/api/match", response_model=MatchResponse)
async def get_perfect_shoe(request: MatchRequest):
    if not request.liked_shoe_names:
        raise HTTPException(status_code=400, detail="User didn't like any shoes!")

    ai_result = generate_match(
        tags=request.quiz_tags, 
        liked_shoes=request.liked_shoe_names
    )
    
    return MatchResponse(
        shoe_name=ai_result["shoe_name"],
        image_url=ai_result["image_url"],
        explanation=ai_result["explanation"]
    )
