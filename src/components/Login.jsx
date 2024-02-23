import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Importing the CSS file
 
 
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend
      const response = await axios.post("http://localhost:5000/api/login", { email, password });
      const { token } = response.data;

      // Store token in local storage
      localStorage.setItem("token", token);

      // Redirect to Body component
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login error (display error message, etc.)
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-heading">Sign in to your account</h2>
          <form className="login-form-fields" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                required
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <div className="flex justify-between">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-btn">
              Sign in
            </button>
          </form>
          <p className="login-register-link">
            Don't have an account?{" "}
            <Link to="/signup" className="register-link">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
