import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../components/loading/loading";
import axiosInstance from "../../../libs/axiosInterceptor";
import "../../../styles/auth/login.css";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../utils/toastNotifications";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  // Function to show/hide password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle sign up
  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);

    axiosInstance
      .post("/auth/login", {
        identify: email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          navigate("/");
          return showSuccessToast("Login successfully!");
        }
      })
      .catch((error) => {
        setLoading(false);
        return showErrorToast(error.response.data.message);
      });
  };

  return (
    <React.Fragment>
      <div className="auth">
        <div className="login-container">
          <div className="login-box">
            <h2>Welcome Back</h2>
            <p>Login to your account</p>
            <form onSubmit={handleSignIn}>
              <div className="input-group">
                <i className="fa fa-envelope icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required=""
                />
              </div>
              <div className="input-group">
                <div onClick={handleShowPassword}>
                  {showPassword ? (
                    <i className="fas fa-lock icon" />
                  ) : (
                    <i className="fa-solid fa-unlock icon"></i>
                  )}
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
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
              {loading ? (
                <Loading />
              ) : (
                <button type="submit" className="login-btn">
                  Login
                </button>
              )}
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
