import os
from google import genai

_client = None

def _get_client():
    """Initializes and caches the Gemini client."""
    global _client
    if _client is None:
        _client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))
    return _client

def embed_query(query: str) -> list[float]:
    """
    Converts a single search string (like the user's swipe vibes) 
    into a list of numbers for ChromaDB to search against.
    """
    client = _get_client()
    response = client.models.embed_content(
        model="gemini-embedding-001",
        contents=query,
    )
    return response.embeddings[0].values

def embed_texts(texts: list[str]) -> list[list[float]]:
    """
    Converts a list of strings into numbers. 
    (You'll use this when saving your scraped shoe data into the database).
    """
    if not texts:
        return []
        
    client = _get_client()
    response = client.models.embed_content(
        model="gemini-embedding-001",
        contents=texts,
    )
    return [emb.values for emb in response.embeddings]