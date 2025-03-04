import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../components/loading/loading";
import SEO from "../../../components/seo/seo";
import {
  forgetInitiate,
  resetAuthState,
} from "../../../redux/actions/authAction";
import {
  selectFlag,
  selectIsLoading,
} from "../../../redux/selectors/authSelector";
import "../../../styles/auth/forget.css";

const ForgetPassword = () => {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const flag = useSelector(selectFlag);
  const isLoading = useSelector(selectIsLoading);

  const handleForgetPass = (e) => {
    e.preventDefault();
    dispatch(forgetInitiate(email));
  };

  React.useEffect(() => {
    if (flag) {
      dispatch(resetAuthState());
      navigate("/auth/login");
    }
  }, [flag]);

  return (
    <React.Fragment>
      <SEO
        title="Forget"
        description="Welcome to page forget website class 02 "
      />
      <div className="auth">
        <div className="forget-container">
          <div className="forget-box">
            <h2>Forgot Password</h2>
            <p>Enter your email to receive a new password</p>
            <form onSubmit={handleForgetPass}>
              <div className="input-group">
                <div className="input-with-icon">
                  <i className="fas fa-envelope" />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              {isLoading ? (
                <Loading />
              ) : (
                <button type="submit" className="forget-btn">
                  <i className="fas fa-paper-plane" /> Send New Password
                </button>
              )}

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
