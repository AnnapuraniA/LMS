// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import UsersPage from "./pages/UsersPage";
import CoursesPage from "./pages/CoursesPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import CourseOfferingsPage from "./pages/CourseOfferingsPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<LoginPage />} />

        {/* Admin Dashboard with nested routes */}
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route index element={<h1>Welcome Admin 🎉</h1>} />
          <Route path="users" element={<UsersPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="courseofferings" element={<CourseOfferingsPage/>} />
          <Route path="reports" element={<ReportsPage/>} />
          <Route path="settings" element={<SettingsPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
