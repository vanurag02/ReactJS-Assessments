import React, { useEffect } from "react";
import "../style/home.css";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []); // runs once when component mounts

  return (
    <>
      <div className="container carousel-container mt-5 w-100">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="/assets/pixel-8.jpg"
                className="d-flex w-75 mx-auto"
                alt="Google Pixel 8"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>New in the market</h2>
                <p>
                  Pre-order now to avail exciting offers. Terms and Conditions
                  apply.
                </p>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="/assets/addidas-ultraboost.jpg"
                className="d-flex w-75 mx-auto"
                alt="Addidas Ultraboost"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>Addidas Ultraboost</h2>
                <p>
                  The softness and grip experienced, like never before. Now at
                  just ₹2,500/-
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="/assets/nike-air-zoom-pegasus.jpg"
                className="d-flex w-75 mx-auto"
                alt="Nike Air Zoom Pegasus"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>Nike Air Zoom Pegasus</h2>
                <p>Nike's most loved shoes now at just ₹2,999/-</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
