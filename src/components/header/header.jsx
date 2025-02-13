import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../libs/axiosInterceptor";

import { keyLocalStorage } from "../../constants/keyConstant";
import "../../styles/components/header.css";
import { deleteFromLocalStorage } from "../../utils/localStorage";
import { showErrorToast } from "../../utils/toastNotifications";

const Header = () => {
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
  ];

  const handleLogout = () => {
    axiosInstance
      .get("/auth/logout")
      .then((response) => {
        if (response.status === 200) {
          deleteFromLocalStorage(keyLocalStorage.accessToken);
          navigate("/auth/login");
        }
      })
      .catch((error) => {
        return showErrorToast(error.response.data.message);
      });
  };

  return (
    <header className="main-header">
      <nav className="nav-container">
        <ul className="nav-list">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
