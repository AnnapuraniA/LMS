// src/pages/LoginPage.jsx
import { GraduationCap } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card">
        
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-6">
          <GraduationCap className="icon-cap" />
          <h1 className="card-title">Learning Management System</h1>
        </div>

        {/* Login Form */}
        <form>
          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>

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
