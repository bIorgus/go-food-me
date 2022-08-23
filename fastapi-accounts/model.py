from pydantic import BaseModel

class Account(BaseModel):
    id: int
    name: str
    password: str
    email: str