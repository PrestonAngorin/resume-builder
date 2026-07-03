from fastapi import FastAPI
from app.database import engine
from app.database import Base
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Resume Builder API"}

@app.get("/health/db")
def db_health():
    try: 
        connection = engine.connect()
        connection.close()
        return {"database": "connected"}
    except Exception as e:
        return {"database": "failed", "error": str(e)}