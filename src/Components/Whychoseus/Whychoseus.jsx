import React from "react";
import "./Whychoseus.css"; // Import the CSS file for styling

const WhyChooseUs = () => {
  return (
    <div
      className="why-choose-us-container"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="25"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="sections-container">
        {/* Prayag Tea Section */}
        <div className="section-card prayag-tea">
          <h3 className="section-heading">Prayag Tea</h3>
          <ul className="feature-list">
            <li>
              Rich Flavor: Crafted from premium-quality tea leaves, offering a
              bold and refreshing taste in every cup.
            </li>
            <li>
              Boosts Energy: A perfect pick-me-up for your mornings or a
              refreshing break during your day.
            </li>
            <li>
              Trusted Quality: Carefully sourced and tested to ensure you get
              the best tea experience.
            </li>
            <li>
              Tradition in Every Sip: Infused with the essence of India’s rich
              tea-drinking culture.
            </li>
            <li>
              Affordable Luxury: Enjoy premium tea without compromising your
              budget.
            </li>
          </ul>
        </div>

        {/* Prayag Ilachi Section */}
        <div className="section-card prayag-ilachi">
          <h3 className="section-heading">Prayag Ilachi</h3>
          <ul className="feature-list">
            <li>
              Superior Aroma: High-quality cardamom with an intense and fresh
              aroma to enhance any dish or drink.
            </li>
            <li>
              Health Benefits: Known for its digestive and detoxifying
              properties, perfect for your well-being.
            </li>
            <li>
              Natural and Pure: Sourced from the best farms to ensure freshness
              and purity.
            </li>
            <li>
              Versatile Usage: Ideal for tea, sweets, savory dishes, and even
              herbal remedies.
            </li>
            <li>
              Premium Quality at Value: Delivering the best cardamom at a price
              you can trust.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
