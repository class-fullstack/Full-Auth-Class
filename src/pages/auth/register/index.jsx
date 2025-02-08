import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/auth/register.css";

const Register = () => {
  return (
    <div className="auth">
      <div className="register-container">
        <div className="register-box">
          <h2>Create an Account</h2>
          <form action="#" method="POST">
            <div className="form-group">
              <i className="fas fa-envelope icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required=""
              />
            </div>
            <div className="form-group">
              <i className="fas fa-lock icon" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                required=""
              />
            </div>
            <div className="form-group">
              <i className="fas fa-lock icon" />
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm your password"
                required=""
              />
            </div>
            <button type="submit" className="register-btn">
              Sign Up
            </button>
          </form>
          <p className="alternate-option">
            Already have an account? <Link to="/auth/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
