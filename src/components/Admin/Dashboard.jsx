import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/admin/users"
              className="block p-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            >
              Manage Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/courses"
              className="block p-4 bg-green-500 text-white rounded shadow hover:bg-green-600"
            >
              Manage Courses
            </Link>
          </li>
          <li>
            <Link
              to="/admin/enrollments"
              className="block p-4 bg-purple-500 text-white rounded shadow hover:bg-purple-600"
            >
              View Enrollments
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Dashboard;
