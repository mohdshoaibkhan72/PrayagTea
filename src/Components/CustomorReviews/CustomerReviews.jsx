import React, { useState, useEffect } from "react";
import "./CustomerReviews.css";
import svg1 from "../../assets/images/png/cupsvg.svg";
import svg2 from "../../assets/images/png/leafsvg.svg";
import svg3 from "../../assets/images/png/leaf2svg.svg";

const reviews = [
  {
    id: 1,
    text: "Paarayag Chai has the perfect aroma and flavor. My mornings are incomplete without it!",
    stars: 5,
    customerName: "John Doe",
  },
  {
    id: 2,
    text: "Prayag Elaichi is the best chai blend I've ever tasted. It's like a warm hug in a cup!",
    stars: 4,
    customerName: "Jane Smith",
  },
  {
    id: 3,
    text: "Absolutely love the freshness of Prayag Elaichi. Highly recommended!",
    stars: 5,
    customerName: "Michael Johnson",
  },
  {
    id: 4,
    text: "Paarayag Chai is my go-to comfort drink after a long day. Perfect blend of spices.",
    stars: 4,
    customerName: "Sarah Lee",
  },
  {
    id: 5,
    text: "Prayag Elaichi is a must-try for tea enthusiasts. Great taste and premium quality.",
    stars: 5,
    customerName: "David Brown",
  },
  {
    id: 6,
    text: "The freshness of Prayag Elaichi is unparalleled. I enjoy every sip!",
    stars: 5,
    customerName: "Emily White",
  },
  {
    id: 7,
    text: "Paarayag Chai has a balanced flavor. A delightful experience every time.",
    stars: 4,
    customerName: "Chris Black",
  },
  {
    id: 8,
    text: "Love the refreshing taste of Prayag Elaichi. My favorite beverage!",
    stars: 5,
    customerName: "Alice Green",
  },
  {
    id: 9,
    text: "Paarayag Chai is my go-to drink for relaxing. Perfect for any time of day.",
    stars: 4,
    customerName: "Tom Harris",
  },
  {
    id: 10,
    text: "The quality of Prayag Elaichi is unmatched. I can't start my day without it!",
    stars: 5,
    customerName: "Lisa Adams",
  },
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Automatically transition every 5 seconds

    return () => clearInterval(sliderInterval);
  }, []);

  // Function to get the alternate SVG icon
  const getSvgIcon = (index) => {
    const icons = [svg1, svg2, svg3]; // Array of SVGs
    return icons[index % icons.length]; // Cycle through the SVGs based on index
  };

  return (
    <div className="slider-container">
      <h1 data-aos="fade-up">Customer Reviews</h1>
      <div className="slider" data-aos="fade-up">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={review.id} className="slider-card">
              <div className="cup-icon">
                {/* Dynamically choose the SVG icon */}
                <img src={getSvgIcon(index)} alt="Icon" />
              </div>
              <div className="stars">
                {"★".repeat(review.stars)}
                {"☆".repeat(5 - review.stars)}
              </div>
              <p className="slider-text">{review.text}</p>
              <p className="customer-name">- {review.customerName}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-buttons">
        <button onClick={handlePrevious} className="slider-button">
          &lt;
        </button>
        <button onClick={handleNext} className="slider-button">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
