import os
from google import genai

_client = None

def _get_client():
    """Initializes and caches the Gemini client."""
    global _client
    if _client is None:
        # Pulls from your .env file via load_dotenv() in main.py
        _client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))
    return _client

def embed_query(query: str) -> list[float]:
    """
    Converts search strings into vectors for ChromaDB.
    Updated to use 'gemini-embedding-001'.
    """
    client = _get_client()
    response = client.models.embed_content(
        model="gemini-embedding-001", 
        contents=query,
    )
    return response.embeddings[0].values

def embed_texts(texts: list[str]) -> list[list[float]]:
    """
    Converts a list of strings into vectors for database ingestion.
    """
    if not texts:
        return []
        
    client = _get_client()
    response = client.models.embed_content(
        model="gemini-embedding-001",
        contents=texts,
    )
    return [emb.values for emb in response.embeddings]