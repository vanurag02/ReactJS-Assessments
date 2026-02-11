import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5>
              <i
                className="bi bi-globe-americas me-2"
                style={{ color: "#e8a838" }}
              ></i>
              Wanderlust Tours
            </h5>
            <p>
              Your trusted travel partner for unforgettable adventures around
              the globe.
            </p>

            <div className="footer-social mt-3">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="packages.html">Packages</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Popular Destinations</h5>
            <ul className="footer-links">
              <li>
                <a href="packages.html">Bali, Indonesia</a>
              </li>
              <li>
                <a href="packages.html">Paris, France</a>
              </li>
              <li>
                <a href="packages.html">Maldives</a>
              </li>
              <li>
                <a href="packages.html">Swiss Alps</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h5>Contact Info</h5>

            <p>
              <i
                className="bi bi-geo-alt me-2"
                style={{ color: "#e8a838" }}
              ></i>
              123 Travel Street, New York, NY 10001
            </p>

            <p>
              <i
                className="bi bi-telephone me-2"
                style={{ color: "#e8a838" }}
              ></i>
              +91 98765 43210
            </p>

            <p>
              <i
                className="bi bi-envelope me-2"
                style={{ color: "#e8a838" }}
              ></i>
              info@wanderlusttours.com
            </p>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p className="mb-0">2026 Wanderlust Tours. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
