import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/auth/forget.css";

const ForgetPassword = () => {
  return (
    <React.Fragment>
      <div className="auth">
        <div className="forget-container">
          <div className="forget-box">
            <h2>Forgot Password</h2>
            <p>Enter your email to receive a new password</p>
            <form action="#">
              <div className="input-group">
                <div className="input-with-icon">
                  <i className="fas fa-envelope" />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required=""
                  />
                </div>
              </div>
              <button type="submit" className="forget-btn">
                <i className="fas fa-paper-plane" /> Send New Password
              </button>
              <div className="forget-text">
                <p>
                  Back to <Link to="/auth/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgetPassword;
