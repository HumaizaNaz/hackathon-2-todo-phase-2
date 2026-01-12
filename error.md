from fastapi import APIRouter
from backend.api.routes import tasks

api_router = APIRouter()
api_router.include_router(tasks.router)

from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select

from backend.core.db import get_session
from backend.core.security import get_current_user
from backend.models import User, Task
from backend.schemas import TaskCreate, TaskRead, TaskUpdate

router = APIRouter(prefix="/tasks", tags=["tasks"])

@router.post("/", response_model=TaskRead)
def create_task(
    *,
    session: Session = Depends(get_session),
    task_in: TaskCreate,
    current_user: User = Depends(get_current_user)
):
    db_task = Task.model_validate(task_in, update={"user_id": current_user.id})
    session.add(db_task)
    session.commit()
    session.refresh(db_task)
    return db_task

@router.get("/", response_model=List[TaskRead])
def read_tasks(
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user)
):
    statement = select(Task).where(Task.user_id == current_user.id)
    tasks = session.exec(statement).all()
    return tasks

@router.get("/{id}", response_model=TaskRead)
def read_task(
    *,
    id: int,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user)
):
    task = session.get(Task, id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    if task.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    return task

@router.put("/{id}", response_model=TaskRead)
def update_task(
    *,
    id: int,
    session: Session = Depends(get_session),
    task_in: TaskUpdate,
    current_user: User = Depends(get_current_user)
):
    db_task = session.get(Task, id)
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    if db_task.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    task_data = task_in.model_dump(exclude_unset=True)
    for key, value in task_data.items():
        setattr(db_task, key, value)
    
    session.add(db_task)
    session.commit()
    session.refresh(db_task)
    return db_task

@router.delete("/{id}")
def delete_task(
    *,
    id: int,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user)
):
    db_task = session.get(Task, id)
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    if db_task.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    session.delete(db_task)
    session.commit()
    return {"status": "success"}



    # # backend/main.py
# from contextlib import asynccontextmanager
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from backend.api.main import api_router
# # 👇 UPDATE: 'Base' aur 'engine' ko yahan se hata diya hai
# from backend.core.db import create_db_and_tables

# @asynccontextmanager
# async def lifespan(app: FastAPI):
#     # Create tables on startup
#     create_db_and_tables()
#     yield

# app = FastAPI(title="Todo Web App API", version="0.1.0", lifespan=lifespan)

# # 👇 NUCLEAR CORS SETUP (Sab allow)
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],     # Sab allowed
#     allow_credentials=False, # Credentials band
#     allow_methods=["*"],     # Sab methods allowed
#     allow_headers=["*"],     # Sab headers allowed
# )

# app.include_router(api_router, prefix="/api/v1")

# @app.get("/health")
# def health_check():
#     return {"status": "ok"}

# if __name__ == "__main__":
#     import uvicorn
#     # Host 0.0.0.0 zaroori hai Windows localhost issue ke liye
#     uvicorn.run(app, host="0.0.0.0", port=8000)










# backend/main.py
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.api.main import api_router
# 👇 UPDATE: 'Base' aur 'engine' ko yahan se hata diya hai
from backend.core.db import create_db_and_tables

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create tables on startup
    create_db_and_tables()
    yield

app = FastAPI(title="Todo Web App API", version="0.1.0", lifespan=lifespan)

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, # 👈 Yahan updated list use karein
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api/v1")

@app.get("/health")
def health_check():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    # Host 0.0.0.0 zaroori hai Windows localhost issue ke liye
    uvicorn.run(app, host="0.0.0.0", port=8000)

    # backend/Dockerfile

# Python 3.13 image use kar rahe hain (Project requirement)
FROM python:3.13-slim

# Working directory set karein
WORKDIR /app

# System dependencies install karein (PostgreSQL ke liye)
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Dependencies file copy karein
COPY pyproject.toml .

# uv package manager install karein (Fast installation ke liye)
RUN pip install uv

# Dependencies install karein
RUN uv pip install --system "fastapi" "uvicorn" "sqlmodel" "psycopg2-binary" "python-jose[cryptography]" "python-multipart" "alembic" "pydantic-settings"

# Pura backend code copy karein
COPY . .

# Port expose karein
EXPOSE 8000

# App run karein
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]


# backend\core\security.py
from datetime import datetime
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlmodel import Session as DBSession, select

from backend.core.db import engine
from backend.models import User, Session as AuthSession

reusable_oauth2 = HTTPBearer()

def get_current_user(token: HTTPAuthorizationCredentials = Depends(reusable_oauth2)) -> User:
    with DBSession(engine) as session:
        # Look up the token in the AuthSession table
        statement = select(AuthSession).where(AuthSession.token == token.credentials)
        auth_session = session.exec(statement).first()
        
        # Validation: Check if session exists and is not expired
        if not auth_session:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid session token",
            )
        
        if auth_session.expiresAt < datetime.utcnow():
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Session expired",
            )
        
        # Fetch the associated User
        user = session.get(User, auth_session.userId)
        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="User not found",
            )
            
        return userfrom pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    DATABASE_URL: str
    BETTER_AUTH_SECRET: str
    ALGORITHM: str = "HS256"
    
    model_config = SettingsConfigDict(env_file="backend/.env", extra="ignore")

settings = Settings()