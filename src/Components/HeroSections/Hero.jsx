import React, { useState, useEffect } from "react";
import "./Hero.css";
import img from "../../assets/images/bcpng.png";
import product1 from "../../assets/images/Prayagchai/prayagteaproduct.png";
import product2 from "../../assets/images/Prayagilachi/ilachipng.png";
import resimg from "../../assets/images/resbck.png";

function Hero() {
  const [currentProduct, setCurrentProduct] = useState(product1);

  useEffect(() => {
    // Toggle between product1 and product2 every 5 seconds
    const productImages = [product1, product2];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % productImages.length;
      setCurrentProduct(productImages[index]);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {/* Left Side: Text Content */}
      <div className="hero-contents">
        <h1 className="hero-title">Prayag Tea</h1>
        <p className="hero-subtitle">हर घूंट में संगम</p>
        <p className="hero-description">
          Experience the richness of authentic leaf tea that blends tradition
          with every sip. Let each cup bring you closer to the harmony of
          Prayag.
        </p>
        <button className="hero-button">Shop Now</button>
      </div>

      {/* Responsive: Single Image for Small Screens */}
      <div className="hero-responsive-image">
        <img src={resimg} alt="Responsive Background" />
      </div>

      {/* Right Side: Main Hero Image */}
      <div className="hero-image">
        <img src={img} alt="Prayag Tea" />
      </div>

      {/* Center Product Image */}
      <div className="productimg">
        <img src={currentProduct} alt="Prayag Tea Products" />
      </div>
    </div>
  );
}

export default Hero;
