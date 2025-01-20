import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/prayagLogo1.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Products", "About", "Contact"];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar-container">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Prayag Tea Logo" />
      </div>

      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link, index) => (
          <li key={index} className="navbar-item">
            {link}
          </li>
        ))}
      </ul>

      {/* Contact Button (Desktop Only) */}
      <button className="contact-button">Get In Touch</button>
    </nav>
  );
}

export default Navbar;
