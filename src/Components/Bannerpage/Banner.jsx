import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container" data-aos="fade-up">
      <h1 className="banner-text" data-aos="fade-right">
        Aquaisites Test
      </h1>
      <h1 className="banner-text" data-aos="fade-right">
        Refreshing Test
      </h1>
      <a href="#" className="banner-link" data-aos="fade-right">
        Describe More
      </a>
    </div>
  );
};

export default Banner;
