import React from "react";
import "../styles/home.css";
import banner from "../assets/hero-banner.jpg";

function Home() {
  return (
    <section
      className="hero-section"
      id="home"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 hero-content">
            <h1>Discover Your Next Adventure</h1>

            <p className="lead">
              Explore breathtaking destinations around the world with our
              expertly curated travel packages. Create memories that last a
              lifetime.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="packages.html" className="btn btn-hero">
                Explore Packages
              </a>
              <a href="about.html" className="btn btn-outline-hero">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
