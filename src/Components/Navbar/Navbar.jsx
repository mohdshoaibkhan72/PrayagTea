import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/prayagLogo1.jpg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/product-details" },
    { name: "About", path: "/aboutus" },
    { name: "Contact", path: "/contacus" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu after a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-container" data-aos="fade-up">
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
            <Link to={link.path} className="navbar-link" onClick={closeMenu}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Contact Button (Desktop Only) */}
      <button className="contact-button">Get In Touch</button>
    </nav>
  );
}

export default Navbar;
