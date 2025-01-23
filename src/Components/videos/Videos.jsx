import React from "react";
import video from "../../assets/video/tearecord.mp4";
import "./Videos.css"; // Import the CSS file

const Videos = () => {
  return (
    <div className="video-container">
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
