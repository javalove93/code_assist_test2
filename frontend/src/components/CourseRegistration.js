import React, { useState } from 'react';

const CourseRegistration = () => {
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/registrations/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ student_id: studentId, course_id: courseId }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Registered for course successfully!');
          // Optionally, redirect or display a success message
        } else {
          console.error('Error registering for course:', response.status);
          // Display an error message to the user
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Display a general error message
      });
  };

  return (
    <div>
      <h2>Course Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student ID:
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </label>
        <label>
          Course ID:
          <input type="text" value={courseId} onChange={(e) => setCourseId(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CourseRegistration;
