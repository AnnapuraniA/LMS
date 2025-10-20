// src/components/UserSubNavbar.jsx
export default function UserSubNavbar({
  activeTab,
  setActiveTab,
  search,
  setSearch,
  department,
  setDepartment,
}) {
  return (
    <div className="user-subnavbar">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "faculty" ? "active" : ""}`}
          onClick={() => setActiveTab("faculty")}
        >
          Faculty
        </button>
        <button
          className={`tab-btn ${activeTab === "student" ? "active" : ""}`}
          onClick={() => setActiveTab("student")}
        >
          Students
        </button>
      </div>

      {/* Search + Filter */}
      <div className="controls">
        <input
          type="text"
          placeholder={`Search ${activeTab}...`}
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
  );
}
