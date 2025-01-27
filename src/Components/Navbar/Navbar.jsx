import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/prayagLogo1.jpg";
import { Link, useNavigate } from "react-router-dom"; // useNavigate for programmatic navigation

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/product-details" },
    { name: "About", path: "/about-us" },
    { name: "Contact", path: "/contact-us" },
  ];

  const navigate = useNavigate(); // Hook for navigation

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu after a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Logic for icons
  const handlePhoneClick = () => {
    // Opens phone dialer with predefined number
    window.location.href = "tel:+919956875067"; // Replace with actual phone number
  };

  const handleEmailClick = () => {
    // Opens the default email client
    window.location.href = "mailto:prayagtea873@gmail.com"; // Replace with actual email address
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

      <div className="contact-icons">
        <button className="contact-button" onClick={handlePhoneClick}>
          <i className="fab fa-whatsapp"></i>
        </button>
        <button className="contact-button" onClick={handleEmailClick}>
          <i className="fas fa-envelope"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
