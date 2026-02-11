import React from "react";
import "../styles/about.css";
import "../styles/global.css";
import aboutImage from "../assets/santorini.jpg";

function About() {
  return (
    <section className="section-padding" id="about-us">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img
              src={aboutImage}
              className="img-fluid rounded-4 shadow"
              alt="Santorini view"
            />
          </div>

          <div className="col-lg-6">
            <h2 className="section-title mb-4">Our Story</h2>

            <p className="lead" style={{ color: "var(--text-muted)" }}>
              Founded with a passion for exploration and a commitment to
              excellence.
            </p>

            <p>
              Wanderlust Tours began in 2010 when a group of travel enthusiasts
              decided to share their love for discovering new places with the
              world. What started as a small team organizing local trips has
              grown into a full-service travel company serving thousands of
              happy travelers each year.
            </p>

            <p>
              We believe that travel is more than just visiting places — it is
              about creating connections, understanding cultures, and building
              memories that last a lifetime. Our carefully curated packages are
              designed to offer authentic experiences while ensuring comfort and
              safety.
            </p>

            <div className="row g-4 mt-4">
              {[
                "Expert Local Guides",
                "Handpicked Hotels",
                "Small Group Tours",
                "24/7 Support",
              ].map((item, index) => (
                <div className="col-6" key={index}>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success fs-4 me-3"></i>
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
