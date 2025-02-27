import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import LoginGoogle from "../../../components/auth/loginGoogle";
import Loading from "../../../components/loading/loading";
import SEO from "../../../components/seo/seo";
import { GoogleClientId } from "../../../configs/googleConfig";
import { loginInitiate } from "../../../redux/actions/authAction";
import "../../../styles/auth/login.css";
import { showErrorToast } from "../../../utils/toastNotifications";

const Login = () => {
  const [identify, setIdentify] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const focusRef = React.useRef(null);

  const { isLoading } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to show/hide password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle sign up
  const handleSignIn = (e) => {
    e.preventDefault();

    if (!identify || !password) {
      return showErrorToast("Please fill all fields!");
    }

    dispatch(loginInitiate(identify, password));
  };

  React.useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <React.Fragment>
      <SEO
        title="Sign In"
        description="Welcome to page Sign In website class 02 "
      />
      <div className="auth">
        <div className="login-container">
          <div className="login-box">
            <h2>Welcome Back</h2>
            <p>Login to your account</p>
            <form onSubmit={handleSignIn}>
              <div className="input-group">
                <i className="fa fa-user icon" />
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email or username"
                  onChange={(e) => setIdentify(e.target.value)}
                  required=""
                  ref={focusRef}
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
              {isLoading ? (
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
                <GoogleOAuthProvider clientId={GoogleClientId}>
                  <LoginGoogle />
                </GoogleOAuthProvider>

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
