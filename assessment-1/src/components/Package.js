import React from "react";
import "../styles/package.css";
import "../styles/global.css";

import bali from "../assets/bali.jpg";
import paris from "../assets/paris.jpg";
import maldives from "../assets/maldives.jpg";
import swiss_alps from "../assets/swiss-alps.jpg";
import tokyo from "../assets/tokyo.jpg";
import santorini from "../assets/santorini.jpg";

function Packages() {
  return (
    // Page Header
    //  Packages Grid
    <section className="section-padding" id="packages">
      <div className="container">
        <div class="container text-center mb-5">
          <h1>Our Travel Packages</h1>
          <p class="lead">
            Discover handpicked destinations for every type of traveler
          </p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card package-card">
              <div className="card-img-wrapper">
                <span className="package-badge">Popular</span>
                <img
                  src={bali}
                  className="card-img-top"
                  alt="Bali, Indonesia"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Magical Bali Escape</h5>
                <p className="location">
                  <i className="bi bi-geo-alt me-1"></i>Bali, Indonesia
                </p>
                <div className="features">
                  <span>
                    <i className="bi bi-calendar3 me-1"></i>7 Days
                  </span>
                  <span>
                    <i className="bi bi-people me-1"></i>2 People
                  </span>
                  <span>
                    <i className="bi bi-star-fill me-1"></i>4.9
                  </span>
                </div>
                <p className="price">
                  ₹1,07,999 <span>/ person</span>
                </p>
                <button
                  className="btn btn-details mt-2"
                  data-bs-toggle="modal"
                  data-bs-target="#baliModal"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card package-card">
              <div className="card-img-wrapper">
                <span className="package-badge">Romantic</span>
                <img src={paris} className="card-img-top" alt="Paris, France" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Romantic Paris Getaway</h5>
                <p className="location">
                  <i className="bi bi-geo-alt me-1"></i>Paris, France
                </p>
                <div className="features">
                  <span>
                    <i className="bi bi-calendar3 me-1"></i>5 Days
                  </span>
                  <span>
                    <i className="bi bi-people me-1"></i>2 People
                  </span>
                  <span>
                    <i className="bi bi-star-fill me-1"></i>4.8
                  </span>
                </div>
                <p className="price">
                  ₹1,57,999 <span>/ person</span>
                </p>
                <button
                  className="btn btn-details mt-2"
                  data-bs-toggle="modal"
                  data-bs-target="#parisModal"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card package-card">
              <div className="card-img-wrapper">
                <span className="package-badge">Luxury</span>
                <img src={maldives} className="card-img-top" alt="Maldives" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Maldives Paradise</h5>
                <p className="location">
                  <i className="bi bi-geo-alt me-1"></i>Maldives
                </p>
                <div className="features">
                  <span>
                    <i className="bi bi-calendar3 me-1"></i>6 Days
                  </span>
                  <span>
                    <i className="bi bi-people me-1"></i>2 People
                  </span>
                  <span>
                    <i className="bi bi-star-fill me-1"></i>5.0
                  </span>
                </div>
                <p className="price">
                  ₹2,07,999 <span>/ person</span>
                </p>
                <button
                  className="btn btn-details mt-2"
                  data-bs-toggle="modal"
                  data-bs-target="#maldivesModal"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card package-card">
              <div className="card-img-wrapper">
                <span className="package-badge">Adventure</span>
                <img
                  src={swiss_alps}
                  className="card-img-top"
                  alt="Swiss Alps"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Swiss Alps Adventure</h5>
                <p className="location">
                  <i className="bi bi-geo-alt me-1"></i>Switzerland
                </p>
                <div className="features">
                  <span>
                    <i className="bi bi-calendar3 me-1"></i>8 Days
                  </span>
                  <span>
                    <i className="bi bi-people me-1"></i>4 People
                  </span>
                  <span>
                    <i className="bi bi-star-fill me-1"></i>4.9
                  </span>
                </div>
                <p className="price">
                  ₹1,82,999 <span>/ person</span>
                </p>
                <button
                  className="btn btn-details mt-2"
                  data-bs-toggle="modal"
                  data-bs-target="#swissModal"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card package-card">
              <div className="card-img-wrapper">
                <span className="package-badge">Cultural</span>
                <img src={tokyo} className="card-img-top" alt="Tokyo, Japan" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Enchanting Japan Tour</h5>
                <p className="location">
                  <i className="bi bi-geo-alt me-1"></i>Tokyo, Japan
                </p>
                <div className="features">
                  <span>
                    <i className="bi bi-calendar3 me-1"></i>10 Days
                  </span>
                  <span>
                    <i className="bi bi-people me-1"></i>2 People
                  </span>
                  <span>
                    <i className="bi bi-star-fill me-1"></i>4.8
                  </span>
                </div>
                <p className="price">
                  ₹2,32,999 <span>/ person</span>
                </p>
                <button
                  className="btn btn-details mt-2"
                  data-bs-toggle="modal"
                  data-bs-target="#tokyoModal"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card package-card">
              <div className="card-img-wrapper">
                <span className="package-badge">Honeymoon</span>
                <img
                  src={santorini}
                  className="card-img-top"
                  alt="Santorini, Greece"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Santorini Bliss</h5>
                <p className="location">
                  <i className="bi bi-geo-alt me-1"></i>Santorini, Greece
                </p>
                <div className="features">
                  <span>
                    <i className="bi bi-calendar3 me-1"></i>6 Days
                  </span>
                  <span>
                    <i className="bi bi-people me-1"></i>2 People
                  </span>
                  <span>
                    <i className="bi bi-star-fill me-1"></i>4.9
                  </span>
                </div>
                <p className="price">
                  ₹1,49,999 <span>/ person</span>
                </p>
                <button
                  className="btn btn-details mt-2"
                  data-bs-toggle="modal"
                  data-bs-target="#santoriniModal"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
