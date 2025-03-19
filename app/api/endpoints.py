from fastapi import APIRouter, HTTPException
from typing import List

from app.models import Student, Course, Registration

router = APIRouter()

# In-memory data storage (for now)
students = {}
courses = {}
registrations = {}

@router.post("/students/", response_model=Student, status_code=201)
async def register_student(student: Student):
    if student.student_id in students:
        raise HTTPException(status_code=400, detail="Student already registered")
    students[student.student_id] = student
    return student

# Placeholder course data
courses = {
    "CS101": Course(course_id="CS101", title="Introduction to Computer Science", description="Basics of programming and problem-solving", credits=3, professor_id="P001", schedule_id="S001"),
    "MA101": Course(course_id="MA101", title="Calculus I", description="Limits, derivatives, and integrals", credits=4, professor_id="P002", schedule_id="S002"),
    "PHY101": Course(course_id="PHY101", title="Physics I", description="Mechanics and motion", credits=4, professor_id="P003", schedule_id="S003"),
}

@router.get("/courses/", response_model=List[Course])
async def search_courses(query: str = None):
    if query:
        results = [course for course in courses.values() if query.lower() in course.title.lower() or query.lower() in course.description.lower()]
    else:
        results = list(courses.values())
    return results

import uuid

@router.post("/registrations/", response_model=Registration, status_code=201)
async def register_for_course(registration: Registration):
    if registration.student_id not in students:
        raise HTTPException(status_code=404, detail="Student not found")
    if registration.course_id not in courses:
        raise HTTPException(status_code=404, detail="Course not found")

    registration.registration_id = str(uuid.uuid4())
    registrations[registration.registration_id] = registration
    return registration

# Optional endpoints (will be implemented later if needed)
# @router.get("/students/{student_id}/registrations/", response_model=List[Registration])
# async def get_student_registrations(student_id: str):
#     raise HTTPException(status_code=501, detail="Not implemented yet")

# @router.delete("/registrations/{registration_id}/", status_code=204)
# async def drop_course(registration_id: str):
#     raise HTTPException(status_code=501, detail="Not implemented yet")
