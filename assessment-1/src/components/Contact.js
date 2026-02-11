import React from "react";
import "../styles/contact.css";
import "../styles/global.css";

function Contact() {
  return (
    <section className="section-padding" id="contact">
      <div className="container">
        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="contact-form">
              <h3 className="mb-4">Send Us a Message</h3>

              <form id="contactForm">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="destination" className="form-label">
                      Interested Destination
                    </label>
                    <select className="form-select" id="destination">
                      <option selected disabled>
                        Select a destination
                      </option>
                      <option value="bali">Bali, Indonesia</option>
                      <option value="paris">Paris, France</option>
                      <option value="maldives">Maldives</option>
                      <option value="swiss">Swiss Alps</option>
                      <option value="tokyo">Tokyo, Japan</option>
                      <option value="santorini">Santorini, Greece</option>
                      <option value="dubai">Dubai, UAE</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="travelers" className="form-label">
                      Number of Travelers
                    </label>
                    <select className="form-select" id="travelers">
                      <option selected disabled>
                        Select number
                      </option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5+">5+ People (Group)</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="travelDate" className="form-label">
                      Preferred Travel Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="travelDate"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="budget" className="form-label">
                      Budget Range (per person)
                    </label>
                    <select className="form-select" id="budget">
                      <option selected disabled>
                        Select budget
                      </option>
                      <option value="economy">₹40,000 - ₹80,000</option>
                      <option value="standard">₹80,000 - ₹1,50,000</option>
                      <option value="premium">₹1,50,000 - ₹2,50,000</option>
                      <option value="luxury">₹2,50,000+</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Your Message *
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Tell us about your dream vacation..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="newsletter"
                      />
                      <label className="form-check-label" htmlFor="newsletter">
                        Subscribe to our newsletter for exclusive deals and
                        travel tips
                      </label>
                    </div>
                  </div>

                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-book btn-lg">
                      <i className="bi bi-send me-2"></i>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="contact-info-box">
              <h4>Get in Touch</h4>

              <div className="contact-info-item">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h6>Our Office</h6>
                  <p>
                    123 Travel Street
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <i className="bi bi-telephone"></i>
                <div>
                  <h6>Phone</h6>
                  <p>
                    +91 98765 43210
                    <br />
                    +91 98765 43211
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <i className="bi bi-envelope"></i>
                <div>
                  <h6>Email</h6>
                  <p>
                    info@wanderlusttours.com
                    <br />
                    bookings@wanderlusttours.com
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <i className="bi bi-clock"></i>
                <div>
                  <h6>Business Hours</h6>
                  <p>
                    Monday - Friday: 9am - 6pm
                    <br />
                    Saturday: 10am - 4pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <hr
                className="my-4"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              />

              <h6 className="mb-3">Follow Us</h6>

              <div className="d-flex gap-2">
                {["facebook", "twitter-x", "instagram", "youtube"].map(
                  (icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="btn btn-outline-light btn-sm rounded-circle"
                      style={{
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className={`bi bi-${icon}`}></i>
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
