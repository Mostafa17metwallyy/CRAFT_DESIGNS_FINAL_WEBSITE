import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import "../styles/Footer.css";
import logo from "../assets/Craft Logo png.png"; // replace with actual path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Craft Logo" className="footer-logo" />
        <ul className="footer-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>

      <div className="footer-center">
        <p>COPY RIGHTS RESERVED</p>
        <p>
          <a
            href="https://thesydev.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by SYDEV
          </a>
        </p>
      </div>

      <div className="footer-right">
        <a
          href="https://www.instagram.com/craft_design_house/?igsh=Z29rNHdtY3ZyZGc5#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/CRAFT.EG?mibextid=wwXIfr&rdid=AOMZzZuGSlLUH0mh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Eydir6gzs%2F%3Fmibextid%3DwwXIfr#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
