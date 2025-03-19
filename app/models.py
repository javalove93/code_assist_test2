from pydantic import BaseModel
from typing import List, Optional

class Student(BaseModel):
    student_id: str  # Assuming student ID is a string
    name: str
    major: str

class Course(BaseModel):
    course_id: str  # Assuming course ID is a string
    title: str
    description: str
    credits: int
    professor_id: str
    schedule_id: str

class Professor(BaseModel):
    professor_id: str  # Assuming professor ID is a string
    name: str
    department: str

class Schedule(BaseModel):
    schedule_id: str  # Assuming schedule ID is a string
    days: List[str]  # e.g., ["Mon", "Wed", "Fri"]
    time: str  # e.g., "10:00-11:00"

class Registration(BaseModel):
    registration_id: Optional[str] = None  # Will be generated by the system
    student_id: str
    course_id: str
