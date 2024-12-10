import React from 'react';

const CourseEnrollment = () => {
  const enrollments = [
    { course: 'Introduction to React', students: ['Alice', 'Bob'] },
    { course: 'Advanced Java', students: ['Charlie', 'Dave'] },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">View Enrollments</h2>
      {enrollments.map((enrollment, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-medium mb-2">{enrollment.course}</h3>
          <ul className="space-y-2">
            {enrollment.students.map((student, i) => (
              <li
                key={i}
                className="bg-white p-4 shadow rounded text-gray-700"
              >
                {student}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseEnrollment;
