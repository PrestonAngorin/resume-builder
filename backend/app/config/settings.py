import os 
from pathlib import Path
from dotenv import load_dotenv

env_path = Path(__file__).resolve().parents[2] / ".env"
load_dotenv(env_path)
SECRET_KEY = os.getenv("SECRET_KEY")

if SECRET_KEY is None:
    raise Exception("SECRET_KEY is not set.")

ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(
    os.getenv("ACCESS_TOKEN_EXPIRE_MINTES", 30)
)