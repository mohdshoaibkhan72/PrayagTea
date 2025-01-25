import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";
import pagenotfound from "../../assets/images/pagenotfound.png";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="page-not-found">
      <img
        src={pagenotfound}
        alt="Page Not Found"
        className="page-not-found-image"
      />
      <h1 className="page-not-found-title">Oops! Page Not Found</h1>
      <p className="page-not-found-text">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <button onClick={() => navigate("/")} className="page-not-found-button">
        Go to Home
      </button>
    </div>
  );
};

export default PageNotFound;
