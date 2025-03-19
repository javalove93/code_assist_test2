import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import StudentRegistration from './components/StudentRegistration';
import CourseSearch from './components/CourseSearch';
import CourseRegistration from './components/CourseRegistration';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Course Registration System</h1>
        <nav>
          <ul>
            <li>
              <Link to="/register">Student Registration</Link>
            </li>
            <li>
              <Link to="/search">Course Search</Link>
            </li>
            <li>
              <Link to="/registration">Course Registration</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<StudentRegistration />} />
          <Route path="/search" element={<CourseSearch />} />
          <Route path="/registration" element={<CourseRegistration />} />
          <Route path="/" element={<div>Welcome to the Course Registration System!</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
