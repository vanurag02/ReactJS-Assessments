import React from "react";

import "../styles/header.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <i className="bi bi-globe-americas me-2"></i>Tourza
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#packages">
                  Packages
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <a href="#packages" className="btn btn-book">
              Book Now
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
