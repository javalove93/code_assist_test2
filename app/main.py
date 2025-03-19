from fastapi import FastAPI

app = FastAPI()

# Include API routes here (will be implemented later)
from app.api import endpoints
app.include_router(endpoints.router)

@app.get("/")
async def read_root():
    return {"message": "Course Registration System API"}
