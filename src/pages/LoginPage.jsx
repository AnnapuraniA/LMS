// src/pages/LoginPage.jsx
import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid username or password");
        return;
      }

      // Store token for later use
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);

      setSuccess(`Welcome, ${data.username}! 🎉`);
      
      // Redirect after 1.5s
      setTimeout(() => {
        navigate("/AdminDashboard");
      }, 1500);

    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-6">
          <GraduationCap className="icon-cap" />
          <h1 className="card-title">Learning Management System</h1>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {/* Messages */}
          {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
          {success && (
            <p style={{ color: "lightgreen", fontSize: "0.9rem" }}>{success}</p>
          )}

          {/* Actions */}
          <button type="submit" className="btn-primary">
            Login
          </button>

          <div className="text-center mt-4">
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
