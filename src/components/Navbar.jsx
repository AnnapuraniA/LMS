// src/components/Navbar.jsx
import { GraduationCap } from "lucide-react";

export default function Navbar({ username, onLogout }) {
  return (
    <nav className="navbar">
      {/* Left: Logo + Title */}
      <div className="navbar-left">
        <GraduationCap className="navbar-logo" />
        <span className="navbar-title">Learning Management System</span>
      </div>

      {/* Right: Username + Logout */}
      <div className="navbar-right">
        <span className="navbar-username">Hello, {username}</span>
        <button onClick={onLogout} className="btn-logout">
          Logout
        </button>
      </div>
    </nav>
  );
}
