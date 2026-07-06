from datetime import datetime
import re
from pydantic import BaseModel, EmailStr, ConfigDict, Field, field_validator

class UserCreate(BaseModel):
    first_name: str = Field(
        min_length=2,
        max_length=50,
        description="User's first name"
    )
    last_name: str = Field(
        min_length=2,
        max_length=50,
        description="User's last name"
    )
    email: EmailStr
    password: str = Field(
        min_length=12,
        max_length=128,
        description="User password"
    )

    @field_validator("password")
    @classmethod
    def validate_password(cls, password: str) -> str:
        if not re.search(r"[A-Z]", password):
            raise ValueError("Password must contain at least one uppercase letter.")
        if not re.search(r"[a-z]", password):
            raise ValueError("Password must contain at least one lowercase letter.")
        if not re.search(r"[\d]", password):
            raise ValueError("Password must contain at least one number.")
        if not re.search(r"[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>/?]", password):
            raise ValueError("Password must contain at least one special character.")
        if " " in password:
            raise ValueError("Password cannot contain spaces")
        
        return password

class UserLogin(BaseModel):
    email: EmailStr
    password: str = Field(
        min_length=12,
        max_length=128
    )

class UserResponse(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: EmailStr
    created_at: datetime
    model_config = ConfigDict(from_attributes=True)

class Token(BaseModel):
    access_token: str
    token_type: str