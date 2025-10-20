// src/pages/ReportsPage.jsx
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function ReportsPage() {
  const [search, setSearch] = useState("");

  // Dummy data for charts
  const coursesData = [
    { dept: "CSE", courses: 40 },
    { dept: "ECE", courses: 30 },
    { dept: "ME", courses: 25 },
    { dept: "CE", courses: 25 },
  ];

  const activityData = [
    { name: "Active", value: 28 },
    { name: "Inactive", value: 7 },
  ];

  const COLORS = ["#2563eb", "#475569"];

  // Dummy faculty activity log
  const activityLogs = [
    { id: 1, faculty: "Dr. Smith", action: "Created Course", date: "2025-09-01" },
    { id: 2, faculty: "Dr. Johnson", action: "Uploaded Content", date: "2025-09-02" },
    { id: 3, faculty: "Prof. Williams", action: "Graded Assignment", date: "2025-09-05" },
    { id: 4, faculty: "Dr. Brown", action: "Viewed Submissions", date: "2025-09-06" },
    { id: 5, faculty: "Dr. Davis", action: "Created Assignment", date: "2025-09-08" },
  ];

  // Filter by search
  const filteredLogs = activityLogs.filter((log) =>
    log.faculty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="reports-page">
      {/* ===== Summary Cards ===== */}
      <div className="summary-cards">
        <div className="card">Total Faculty: 35</div>
        <div className="card">Active Faculty: 28</div>
        <div className="card">Courses Created: 120</div>
        <div className="card">Avg Activity / Week: 15 actions</div>
      </div>

      {/* ===== Charts ===== */}
      <div className="charts">
        {/* Bar Chart */}
        <div className="chart-card">
          <h3>Courses per Department</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={coursesData}>
              <XAxis dataKey="dept" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="courses" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="chart-card">
          <h3>Faculty Activity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={activityData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {activityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===== Search Bar ===== */}
      <div className="user-subnavbar">
        <input
          type="text"
          placeholder="Search faculty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ===== Activity Log Table ===== */}
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Faculty</th>
              <th>Action</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.faculty}</td>
                  <td>{log.action}</td>
                  <td>{log.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", color: "#94a3b8" }}>
                  No logs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
