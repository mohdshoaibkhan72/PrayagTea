import React from "react";
import video from "../../assets/video/tearecord.mp4";
import "./Videos.css"; // Import the CSS file

const Videos = () => {
  return (
    <div
      className="video-container"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="25"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <video
        src={video}
        autoPlay
        loop
        muted
        className="video"
        aria-label="Video playing continuously"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videos;
