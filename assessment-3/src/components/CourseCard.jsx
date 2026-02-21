import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CourseCard extends Component {
  render() {
    const { id, name, duration, price, image } = this.props.course;

    return (
      <div className="col-md-4 mb-5 d-flex justify-content-center">
        <div className="card shadow-sm text-center" style={{ width: "18rem" }}>
          {/* Course Image */}
          <img
            src={image}
            className="card-img-top"
            alt={name}
            style={{ height: "180px", objectFit: "cover" }}
          />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{name}</h5>

            <p className="card-text">Duration: {duration}</p>

            <p className="card-text fw-bold">₹{price}</p>

            <div className="mt-auto d-flex gap-2">
              <Link to={`/course/${id}`} className="btn btn-primary w-50">
                View Details
              </Link>

              <button
                type="button"
                className="btn btn-success w-50"
                data-bs-toggle="modal"
                data-bs-target={`#modal-${id}`}
              >
                Enroll
              </button>
            </div>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id={`modal-${id}`}
            tabIndex="-1"
            aria-labelledby={`modalLabel-${id}`}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id={`modalLabel-${id}`}>
                    Congratulations!
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  You've been successfully enrolled for the {name} course.
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End Modal */}
        </div>
      </div>
    );
  }
}

export default CourseCard;
