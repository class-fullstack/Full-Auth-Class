import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/auth/login.css";

const Login = () => {
  return (
    <React.Fragment>
      <div className="auth">
        <div className="login-container">
          <div className="login-box">
            <h2>Welcome Back</h2>
            <p>Login to your account</p>
            <form action="#">
              <div className="input-group">
                <i className="fa fa-envelope icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required=""
                />
              </div>
              <div className="input-group">
                <i className="fa fa-lock icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required=""
                />
              </div>
              <div className="options">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="/auth/forget" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
            <div className="social-login">
              <p>Or login with</p>
              <div className="social-icons">
                <button className="google-btn">
                  <i className="fab fa-google" /> Google
                </button>
                <button className="facebook-btn">
                  <i className="fab fa-facebook-f" /> Facebook
                </button>
              </div>
            </div>
            <p className="register-text">
              Don't have an account?{" "}
              <Link to="/auth/register">Register now</Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
