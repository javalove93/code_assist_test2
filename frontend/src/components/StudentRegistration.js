import React, { useState } from 'react';

const StudentRegistration = () => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [major, setMajor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/students/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ student_id: studentId, name, major }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Student registered successfully!');
          // Optionally, redirect to another page or display a success message
        } else {
          console.error('Error registering student:', response.status);
          // Display an error message to the user
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Display a general error message to the user
      });
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student ID:
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Major:
          <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentRegistration;
