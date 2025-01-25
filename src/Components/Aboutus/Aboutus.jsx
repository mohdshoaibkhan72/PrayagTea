import React from "react";
import "./Aboutus.css"; // Import the CSS file

function Aboutus() {
  return (
    <div className="about-container">
      {/* About Us Section */}
      <div className="about-section" data-aos="fade-up">
        <div className="about-text">
          <h1>About Us</h1>
          <h2>Welcome to Our Tea Store</h2>
          <p>
            We are a family-run company founded on a passion for tea. Our
            Chairman made a promise to never sell tea he wouldn’t drink at home.
            Learn how we stay true to those values in everything we do.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}
export default Aboutus;
