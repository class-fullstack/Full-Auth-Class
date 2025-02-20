import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginGoogle = () => {
  const navigate = useNavigate();
  // Login Google
  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );

        // Send user email to backend
        console.log("User Info:", userInfo.data);
      } catch (error) {
        console.error("Error fetching user info", error);
      }
    },
    onError: (error) => console.error("Login Failed:", error),
  });

  return (
    <button className="google-btn" onClick={() => loginGoogle()}>
      <i className="fab fa-google" /> Google
    </button>
  );
};

export default LoginGoogle;
