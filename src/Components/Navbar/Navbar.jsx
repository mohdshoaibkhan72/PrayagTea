import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/prayagLogo1.jpg";
function Navbar() {
  const navLinks = ["Home", "Products", "About", "Contact"];

  return (
    <div className="navbar-container">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Prayag Tea Logo" />
      </div>

      <ul className="navbar-links">
        {navLinks.map((link, index) => (
          <li key={index} className="navbar-item">
            {link}
          </li>
        ))}
      </ul>

      <button className="contact-button">Get In Touch</button>
    </div>
  );
}

export default Navbar;
