// src/components/Sidebar.jsx
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Building2,
  Layers,
  FileText,
  ClipboardList,
  Inbox,
  GraduationCap,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Sidebar({ isCollapsed, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Collapse Button */}
      <div className="sidebar-header">
        <button onClick={toggleSidebar} className="collapse-btn">
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className="sidebar-nav">
        <a href="#"><LayoutDashboard className="icon" /> {!isCollapsed && "Dashboard"}</a>
        <a href="#"><Users className="icon" /> {!isCollapsed && "Users"}</a>
        <a href="#"><BookOpen className="icon" /> {!isCollapsed && "Courses"}</a>
        <a href="#"><Building2 className="icon" /> {!isCollapsed && "Departments"}</a>
        <a href="#"><Layers className="icon" /> {!isCollapsed && "Course Offerings"}</a>
        <a href="#"><FileText className="icon" /> {!isCollapsed && "Content"}</a>
        <a href="#"><ClipboardList className="icon" /> {!isCollapsed && "Assignments"}</a>
        <a href="#"><Inbox className="icon" /> {!isCollapsed && "Submissions"}</a>
        <a href="#"><GraduationCap className="icon" /> {!isCollapsed && "Grades"}</a>
        <a href="#"><BarChart3 className="icon" /> {!isCollapsed && "Reports / Analytics"}</a>
        <a href="#"><Settings className="icon" /> {!isCollapsed && "Settings"}</a>
      </nav>
    </aside>
  );
}
