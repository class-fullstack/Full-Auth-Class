import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/header.css";

const Header = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
  ];
  return (
    <React.Fragment>
      <header className="main-header">
        <nav>
          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
