import { useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  BookOpen,
  Building2,
  Layers,
  FileText,
  ClipboardList,
  Inbox,
  GraduationCap as GradeIcon,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const username = localStorage.getItem("username") || "admin";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="full-page-layout">
      {/* ===== Navbar ===== */}
      <header className="navbar">
        <div className="navbar-left">
          <GraduationCap className="navbar-logo" />
          <span className="navbar-title">Learning Management System</span>
        </div>
        <div className="navbar-right">
          <span className="navbar-username">Hello, {username}</span>
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      {/* ===== Sidebar + Main wrapper ===== */}
      <div className="content-wrapper">
        {/* Sidebar */}
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
          <nav className="sidebar-nav">
            <Link to="/AdminDashboard" onClick={() => setCollapsed(true)}>
              <LayoutDashboard /> {!collapsed && "Dashboard"}
            </Link>
            <Link to="/AdminDashboard/users" onClick={() => setCollapsed(true)}>
              <Users /> {!collapsed && "Users"}
            </Link>
            <Link to="/AdminDashboard/courses" onClick={() => setCollapsed(true)}>
              <BookOpen /> {!collapsed && "Courses"}
            </Link>
            <Link to="/AdminDashboard/departments" onClick={() => setCollapsed(true)}>
              <Building2 /> {!collapsed && "Departments"}
            </Link>
            <Link to="/AdminDashboard/courseofferings" onClick={() => setCollapsed(true)}>
              <Layers /> {!collapsed && "Course Offerings"}
            </Link>
            <Link to="/AdminDashboard/reports" onClick={() => setCollapsed(true)}>
              <BarChart2 /> {!collapsed && "Reports / Analytics"}
            </Link>
            <Link to="/AdminDashboard/settings" onClick={() => setCollapsed(true)}>
              <Settings /> {!collapsed && "Settings"}
            </Link>
          </nav>
        </aside>

        {/* ===== Main Content with Nested Routes ===== */}
        <main className="main-content">
          <Outlet /> {/* This is where child routes (like UsersPage) render */}
        </main>
      </div>
    </div>
  );
}
