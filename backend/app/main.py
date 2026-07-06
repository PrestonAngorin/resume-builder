from fastapi import FastAPI
from app.database import engine
from fastapi.middleware.cors import CORSMiddleware
from app.api.auth import router as auth_router
from app.api.users import router as users_router

app = FastAPI()

app.include_router(auth_router)
app.include_router(users_router)

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