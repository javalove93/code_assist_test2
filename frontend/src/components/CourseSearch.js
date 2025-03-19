import React, { useState, useEffect } from 'react';

const CourseSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`/courses/?query=${searchTerm}`);
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        } else {
          console.error('Error fetching courses:', response.status);
          // Display an error message to the user
        }
      } catch (error) {
        console.error('Error:', error);
        // Display a general error message to the user
      }
    };

    fetchCourses();
  }, [searchTerm]); // Re-fetch when searchTerm changes

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Course Search</h2>
      <input type="text" placeholder="Search for courses" value={searchTerm} onChange={handleSearchChange} />
      <ul>
        {courses.map((course) => (
          <li key={course.course_id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Credits: {course.credits}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseSearch;
