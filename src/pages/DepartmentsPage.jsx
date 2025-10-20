// src/pages/DepartmentsPage.jsx
import { useState } from "react";

export default function DepartmentsPage() {
  const [search, setSearch] = useState("");

  // Sample department data (replace later with API data)
  const departments = [
    { id: 1, name: "Computer Science", code: "CSE" },
    { id: 2, name: "Electronics", code: "ECE" },
    { id: 3, name: "Mechanical", code: "ME" },
    { id: 4, name: "Civil", code: "CE" },
  ];

  // Filter departments based on search input
  const filteredDepartments = departments.filter(
    (dept) =>
      dept.name.toLowerCase().includes(search.toLowerCase()) ||
      dept.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="departments-page">
      {/* ===== Action Bar ===== */}
      <div className="action-bar">
        <input
          type="text"
          placeholder="Search departments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn">+ Add Department</button>
        <button className="btn btn-warning">Export</button>
      </div>

      {/* ===== Table ===== */}
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Department Name</th>
              <th>Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDepartments.map((dept) => (
              <tr key={dept.id}>
                <td>{dept.id}</td>
                <td>{dept.name}</td>
                <td>{dept.code}</td>
                <td>
                  <button className="btn-small">Edit</button>
                  <button className="btn-small btn-danger">Delete</button>
                </td>
              </tr>
            ))}
            {filteredDepartments.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", color: "#aaa" }}>
                  No departments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
