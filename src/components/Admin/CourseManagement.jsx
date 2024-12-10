import React, { useState } from 'react';

const CourseManagement = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Introduction to React', faculty: null },
    { id: 2, name: 'Advanced Java', faculty: null },
  ]);

  const [faculty, setFaculty] = useState([
    { id: 1, name: 'Jane Smith' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Alice Johnson' },
  ]);

  const assignFaculty = (courseId, facultyId) => {
    setCourses(courses.map(course =>
      course.id === courseId ? { ...course, faculty: facultyId } : course
    ));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Manage Courses</h2>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li
            key={course.id}
            className="flex justify-between items-center bg-white p-4 shadow rounded"
          >
            <span>
              {course.name}
              <span className="text-gray-500 ml-2">
                (Faculty: {course.faculty ? faculty.find(f => f.id === course.faculty)?.name : 'Not Assigned'})
              </span>
            </span>
            <select
              onChange={(e) => assignFaculty(course.id, parseInt(e.target.value))}
              value={course.faculty || ''}
              className="bg-gray-200 p-2 rounded"
            >
              <option value="">Assign Faculty</option>
              {faculty.map(fac => (
                <option key={fac.id} value={fac.id}>
                  {fac.name}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManagement;
