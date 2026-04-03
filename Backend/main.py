import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
load_dotenv()
from routers import chat
from services.vector_store import init_chroma

app = FastAPI(title="Shoe Tinder API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    init_chroma()
    print("Shoe Tinder Backend Started! ChromaDB Initialized.")

app.include_router(chat.router)

@app.get("/")
def read_root():
    return {
        "status": "online", 
        "message": "Shoe Tinder API is up and running! Ready to swipe."
    }
