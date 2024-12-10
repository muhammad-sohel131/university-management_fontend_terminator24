import React from "react";
import './index.css';
import { createRoot } from 'react-dom/client';
import Root from "./Root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard";
import UserManagement from "./components/Admin/UserManagement";
import CourseManagement from "./components/Admin/CourseManagement";
import CourseEnrollment from "./components/Admin/CourseEnrollment";

const fetchUserRole = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const userRole = localStorage.getItem("role"); // E.g., "Admin", "Student", "Teacher"
  return userRole;
};


const ProtectedRoute = ({ role, element }) => {
  const userRole = fetchUserRole();
  return element
  if (!userRole) {
    return <Login />; // Redirect to login if user is not authenticated
  }

  return userRole === role ? element : <Login />; // Redirect unauthorized roles to login
};

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/admin',
        element: <Dashboard />,
        children: [
          {
            path: 'users',
            element: <UserManagement />
          },
          {
            path: 'courses',
            element: <CourseManagement />
          },
          {
            path: 'enrollments',
            element: <CourseEnrollment />
          }
        ]
      },
    ]
  }
]
    );
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);