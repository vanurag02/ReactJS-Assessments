import React from "react";
import { NavLink } from "react-router-dom";
import "../style/notfound.css";

const NotFound = () => {
  return (
    <>
      <div className="notfound-container">
        <div className="notfound-box">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page Not Found</h2>
          <p className="error-text">
            The page you are looking for does not exist or has been moved.
          </p>

          <NavLink to="/" className="btn btn-primary mt-3">
            Back to Home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NotFound;
