import { useState } from "react";
import UserSubNavbar from "../components/UserSubNavbar";

export default function UsersPage() {
  const [activeTab, setActiveTab] = useState("faculty");
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Dummy users for now
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      username: "johndoe",
      role: "Faculty",
      department: "CSE",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      username: "janesmith",
      role: "Student",
      department: "ECE",
      status: "Inactive",
    },
  ];

  const toggleSelectUser = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
    );
  };

  return (
    <div className="users-page">
      {/* Sub Navbar */}
      <UserSubNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Action Bar */}
      <div className="action-bar">
        <button className="btn">+ Add User</button>
        <button className="btn">+ Bulk Upload</button>
        {selectedUsers.length > 0 && (
          <>
            <button className="btn-warning">Deactivate Selected</button>
            <button className="btn-danger">Delete Selected</button>
          </>
        )}
      </div>

      {/* User Table */}
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
              <th>Department</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((u) => u.role.toLowerCase() === activeTab)
              .map((user) => (
                <tr key={user.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleSelectUser(user.id)}
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>{user.department}</td>
                  <td>{user.status}</td>
                  <td>
                    <button className="btn-small">Edit</button>
                    <button className="btn-small btn-warning">Deactivate</button>
                    <button className="btn-small btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button>&lt; Prev</button>
        <span>Page 1 of 5</span>
        <button>Next &gt;</button>
      </div>
    </div>
  );
}
