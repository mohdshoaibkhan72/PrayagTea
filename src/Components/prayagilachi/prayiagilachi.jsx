import React, { useState, useEffect } from "react";
import "./prayagilachai.css";
import prayagchai1 from "../../assets/images/Prayagilachi/ilcahiphoto.jpg";
import prayagchai2 from "../../assets/images/Prayagilachi/ilachipng2.png";
import prayagchai3 from "../../assets/images/Prayagilachi/ilachipng3.jpg";
import leaf1 from "../../assets/images/png/leaf1.png";
import leaf2 from "../../assets/images/png/leaf2.png";

const Prayagilachi = () => {
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
    <div className="prayagilachi-container">
      {/* Decorative Leaf Images */}
      <img
        src={leaf1}
        alt="Decorative Leaf 1"
        className="Ilachileaf leaff1"
        loading="lazy"
      />
      <img
        src={leaf2}
        alt="Decorative Leaf 2"
        className="Ilachileaf leaff2"
        loading="lazy"
      />

      <div className="prayagilachi-content">
        {/* Slider Section */}
        <div className="prayagilachi-slider">
          <div
            className="prayagilachi-slider-wrapper"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            aria-live="polite"
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Prayagchai ${index + 1}`}
                className="prayagilachi-slider-image"
                loading="lazy"
                onError={(e) =>
                  (e.target.src = "/assets/images/default-fallback.jpg")
                }
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
        <div className="prayagilachi-description">
          <h1>Ilachi: The Essence of Elegance in Every Sip</h1>
          <p className="intro-text">
            Ilachi isn’t just tea—it’s a celebration of the aromatic richness of
            cardamom blended with the finest tea leaves. It transforms an
            ordinary cup into an extraordinary moment of indulgence.
          </p>
          <section>
            <h2>Why Choose Ilachi?</h2>
            <p>
              Each cup of Ilachi offers the perfect balance of warmth and
              flavor. The delightful aroma of premium cardamom complements the
              robustness of handpicked tea leaves, making it an irresistible
              choice for tea lovers.
            </p>
          </section>
          <section>
            <h2>Experience the Authenticity</h2>
            <p>
              Ilachi is a tribute to time-honored traditions, where every
              ingredient is chosen with care. From the lush tea gardens to your
              cup, Ilachi guarantees an authentic and satisfying experience in
              every brew.
            </p>
          </section>
          <section>
            <h2>The Perfect Blend of Flavor</h2>
            <p>
              Indulge in a tea crafted to perfection. With just the right hint
              of cardamom, Ilachi promises a unique and comforting taste that
              lingers long after the last sip.
            </p>
          </section>
          <section>
            <h2>More Than Just Tea</h2>
            <p>
              Ilachi is a bridge that brings people together over meaningful
              conversations, warm memories, and shared smiles. It’s more than a
              beverage; it’s a lifestyle.
            </p>
          </section>
          <button
            className="nav-button learn-more-button"
            onClick={() => (window.location.href = "/learn-more")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prayagilachi;
