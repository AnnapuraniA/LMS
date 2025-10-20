import { useState } from "react";

export default function SettingsPage() {
  // States
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@college.edu",
    password: "",
  });

  const [system, setSystem] = useState({
    college: "My College",
    academicYear: "2025-26",
    semester: "Odd",
  });

  const [preferences, setPreferences] = useState({
    darkMode: false,
    collapseSidebar: false,
  });

  const [notifications, setNotifications] = useState({
    facultyAlerts: true,
  });

  // Handlers
  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSystemChange = (e) => {
    setSystem({ ...system, [e.target.name]: e.target.value });
  };

  return (
    <div className="settings-page">
      <h2>⚙️ Settings</h2>

      {/* Profile Settings */}
      <section className="settings-section">
        <h3>👤 Profile Settings</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleProfileChange}
          />
        </label>
      </section>

      {/* System Settings */}
      <section className="settings-section">
        <h3>🏫 System Settings</h3>
        <label>
          College Name:
          <input
            type="text"
            name="college"
            value={system.college}
            onChange={handleSystemChange}
          />
        </label>
        <label>
          Academic Year:
          <input
            type="text"
            name="academicYear"
            value={system.academicYear}
            onChange={handleSystemChange}
          />
        </label>
        <label>
          Semester:
          <select
            name="semester"
            value={system.semester}
            onChange={handleSystemChange}
          >
            <option value="Odd">Odd</option>
            <option value="Even">Even</option>
          </select>
        </label>
      </section>

      {/* Preferences */}
      <section className="settings-section">
        <h3>🎨 Preferences</h3>
        <label>
          <input
            type="checkbox"
            checked={preferences.darkMode}
            onChange={(e) =>
              setPreferences({ ...preferences, darkMode: e.target.checked })
            }
          />
          Enable Dark Mode
        </label>
        <label>
          <input
            type="checkbox"
            checked={preferences.collapseSidebar}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                collapseSidebar: e.target.checked,
              })
            }
          />
          Collapse Sidebar by Default
        </label>
      </section>

      {/* Notifications */}
      <section className="settings-section">
        <h3>🔔 Notifications</h3>
        <label>
          <input
            type="checkbox"
            checked={notifications.facultyAlerts}
            onChange={(e) =>
              setNotifications({
                ...notifications,
                facultyAlerts: e.target.checked,
              })
            }
          />
          Email alerts for faculty activity
        </label>
      </section>

      {/* Data Management */}
      <section className="settings-section">
        <h3>💾 Data Management</h3>
        <button className="btn">Export Data</button>
      </section>
    </div>
  );
}
