import React, { useState, useEffect } from "react";
import "./PrayagchaiDetails.css";
import prayagchai1 from "../../assets/images/Prayagchai/prayagteap1.png";
import prayagchai2 from "../../assets/images/Prayagchai/prayagteap2.jpg";
import prayagchai3 from "../../assets/images/Prayagchai/prayagteap4.jpg";
import leaf1 from "../../assets/images/png/leaf1.png";
import leaf2 from "../../assets/images/png/leaf2.png";

const PrayagchaiDetails = () => {
  const images = [prayagchai1, prayagchai2, prayagchai3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
      5000
    );
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % images.length
        : (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="prayagchai-container">
      <img
        src={leaf1}
        alt="Decorative Leaf 1"
        className="leaf leaf-top-left"
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      />
      <img
        src={leaf2}
        alt="Decorative Leaf 2"
        className="leaf leaf-bottom-right"
        data-aos="fade-right"
      />

      <div className="prayagchai-content" data-aos="fade-right">
        <div className="prayagchai-slider">
          <div
            className="prayagchai-slider-wrapper"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Prayagchai ${index + 1}`}
                className="prayagchai-slider-image"
              />
            ))}
          </div>
          <div className="navigation-buttons">
            <button
              className="nav-button"
              onClick={() => handleNavigation("prev")}
              aria-label="Previous Image"
            >
              &#8592;
            </button>
            <button
              className="nav-button"
              onClick={() => handleNavigation("next")}
              aria-label="Next Image"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Description Section */}
        <div className="prayagchai-description" data-aos="fade-left">
          <h1>Prayagchai: Har Ghoot Me Sangum</h1>
          <p className="intro-text">
            Discover the perfect blend of tradition, flavor, and comfort in
            every sip.
          </p>
          <section>
            <h2>The Essence of Prayagchai</h2>
            <p>
              Imagine holding a warm cup of Prayagchai on a chilly morning, the
              aroma of fresh tea leaves and spices gently awakening your senses.
            </p>
          </section>
          <section>
            <h2>Experience the Ritual</h2>
            <p>
              Prayagchai isn’t just a beverage; it’s an experience that brings
              people together and offers a moment of peace.
            </p>
          </section>
          <section>
            <h2>Crafted with Care</h2>
            <p>
              From the finest tea gardens to your cup, Prayagchai is crafted
              with love and precision, ensuring every sip tells a story.
            </p>
          </section>
          <button className="nav-button learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default PrayagchaiDetails;
