import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/Craft Logo jpg.jpg";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Craft Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={currentPath === "/" ? "active-nav-link" : ""}>
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/design"
            className={currentPath === "/design" ? "active-nav-link" : ""}
          >
            DESIGN HOUSE
          </Link>
        </li>
        <li>
          <Link
            to="/production"
            className={currentPath === "/production" ? "active-nav-link" : ""}
          >
            PRODUCTION HOUSE
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className={currentPath === "/About" ? "active-nav-link" : ""}
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={currentPath === "/contact" ? "active-nav-link" : ""}
          >
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
