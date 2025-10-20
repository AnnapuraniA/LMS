// src/pages/CoursesPage.jsx
import { useState } from "react";

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("active");
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");

  // Dummy courses data
  const courses = [
    { id: 1, code: "CSE101", name: "Introduction to Programming", dept: "CSE", credits: 4 },
    { id: 2, code: "ECE201", name: "Digital Circuits", dept: "ECE", credits: 3 },
    { id: 3, code: "ME301", name: "Thermodynamics", dept: "ME", credits: 3 },
    { id: 4, code: "CE110", name: "Engineering Mechanics", dept: "CE", credits: 3 },
  ];

  // Filtering by search + department
  const filteredCourses = courses.filter(
    (c) =>
      (search === "" ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.code.toLowerCase().includes(search.toLowerCase())) &&
      (department === "" || c.dept === department)
  );

  return (
    <div className="courses-page">
      {/* ===== Sub Navbar ===== */}
      <div className="user-subnavbar">
        <div className="user-tabs">
          <button
            className={`user-tab ${activeTab === "active" ? "active" : ""}`}
            onClick={() => setActiveTab("active")}
          >
            Active Courses
          </button>
          <button
            className={`user-tab ${activeTab === "archived" ? "active" : ""}`}
            onClick={() => setActiveTab("archived")}
          >
            Archived Courses
          </button>
        </div>

        {/* Search + Department Filter */}
        <div className="controls">
          <input
            type="text"
            placeholder="Search by code or name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="">All Departments</option>
            <option value="CSE">Computer Science</option>
            <option value="ECE">Electronics</option>
            <option value="ME">Mechanical</option>
            <option value="CE">Civil</option>
          </select>
        </div>
      </div>

      {/* ===== Action Bar ===== */}
      <div className="action-bar">
        <button className="btn">+ Add Course</button>
        <button className="btn">Export</button>
      </div>

      {/* ===== Course Table ===== */}
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Department</th>
              <th>Credits</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.id}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>{course.dept}</td>
                <td>{course.credits}</td>
                <td>
                  <button className="btn-small">Edit</button>
                  <button className="btn-danger btn-small">Delete</button>
                </td>
              </tr>
            ))}
            {filteredCourses.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No courses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ===== Pagination ===== */}
      <div className="pagination">
        <button>Previous</button>
        <span>Page 1 of 3</span>
        <button>Next</button>
      </div>
    </div>
  );
}
