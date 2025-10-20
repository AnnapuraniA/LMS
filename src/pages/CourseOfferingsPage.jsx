// src/pages/CourseOfferingsPage.jsx
import { useState } from "react";

export default function CourseOfferingsPage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  const offerings = [
    {
      id: 1,
      course: "Data Structures",
      department: "CSE",
      faculty: "Dr. Rao",
      year: "2025",
      semester: "Odd",
      className: "CSE-2A",
    },
    {
      id: 2,
      course: "Digital Circuits",
      department: "ECE",
      faculty: "Prof. Sharma",
      year: "2025",
      semester: "Even",
      className: "ECE-3B",
    },
  ];

  const filteredOfferings = offerings.filter((o) => {
    return (
      (department === "" || o.department === department) &&
      (year === "" || o.year === year) &&
      (semester === "" || o.semester === semester) &&
      (o.course.toLowerCase().includes(search.toLowerCase()) ||
        o.faculty.toLowerCase().includes(search.toLowerCase()) ||
        o.className.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="courses-page">
      {/* ===== Top Controls ===== */}
      <div className="user-subnavbar">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by course, faculty, or class..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {/* Filters */}
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">All Departments</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="ME">Mechanical</option>
          <option value="CE">Civil</option>
        </select>

        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">All Years</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>

        <select value={semester} onChange={(e) => setSemester(e.target.value)}>
          <option value="">All Semesters</option>
          <option value="Odd">Odd</option>
          <option value="Even">Even</option>
        </select>
      </div>

      {/* ===== Action Bar ===== */}
      <div className="action-bar">
        <button className="btn">Add Offering</button>
        <button className="btn">Export</button>
      </div>

      {/* ===== Offerings Table ===== */}
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Department</th>
              <th>Faculty</th>
              <th>Year</th>
              <th>Semester</th>
              <th>Class</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOfferings.map((o) => (
              <tr key={o.id}>
                <td>{o.course}</td>
                <td>{o.department}</td>
                <td>{o.faculty}</td>
                <td>{o.year}</td>
                <td>{o.semester}</td>
                <td>{o.className}</td>
                <td>
                  <button className="btn-small">Edit</button>
                  <button className="btn-small btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
