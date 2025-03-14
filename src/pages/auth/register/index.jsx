import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../components/loading/loading";
import SEO from "../../../components/seo/seo";
import {
  registerInitiate,
  resetAuthState,
} from "../../../redux/actions/authAction";
import {
  selectFlag,
  selectIsLoading,
} from "../../../redux/selectors/authSelector";
import "../../../styles/auth/register.css";
import { isValidEmail } from "../../../utils/checkInput";
import { showErrorToast } from "../../../utils/toastNotifications";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isFlag = useSelector(selectFlag);

  // Function to show/hide password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Function to show/hide confirm password
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Function to handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      return showErrorToast("Invalid email!");
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return showErrorToast("Passwords do not match!");
    }

    // Call API to register
    dispatch(registerInitiate(email, password));
  };

  React.useEffect(() => {
    if (isFlag) {
      navigate("/auth/login");
    }
    return () => resetAuthState();
  }, [isFlag]);

  return (
    <React.Fragment>
      <SEO
        title="Sign Up"
        description="Welcome to page Sign Up website class 02 "
      />
      <div className="auth">
        <div className="register-container">
          <div className="register-box">
            <h2>Create an Account</h2>
            <form onSubmit={handleSignUp}>
              <div className="form-group">
                <i className="fas fa-envelope icon" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
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
                  name="password"
                  placeholder="Create a password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <div onClick={handleShowConfirmPassword}>
                  {showConfirmPassword ? (
                    <i className="fas fa-lock icon" />
                  ) : (
                    <i className="fa-solid fa-unlock icon"></i>
                  )}
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {isLoading ? (
                <Loading />
              ) : (
                <button type="submit" className="register-btn">
                  Sign Up
                </button>
              )}
            </form>
            <p className="alternate-option">
              Already have an account? <Link to="/auth/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
