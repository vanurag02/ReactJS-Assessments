import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";

export class CourseDetails extends Component {
  render() {
    const { id } = this.props.match.params;
    const course = this.props.courses.find((c) => c.id === parseInt(id));

    if (!course) {
      return <Redirect to="/notfound" />;
    }

    return (
      <div className="container my-5">
        <div className="card shadow-lg p-4">
          {/* Course Image */}
          <img
            src={course.image}
            alt={course.name}
            className="img-fluid rounded mb-4"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />

          {/* Course Title */}
          <h2 className="mb-3">{course.name}</h2>

          {/* Description */}
          <p className="mb-4">{course.description}</p>

          {/* Course Info */}
          <div className="row mb-4">
            <div className="col-md-6">
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
              <p>
                <strong>Price:</strong> ₹{course.price}
              </p>
              <p>
                <strong>Instructor:</strong> {course.instructor}
              </p>
            </div>

            <div className="col-md-6">
              <p>
                <strong>Level:</strong> {course.level}
              </p>
              <p>
                <strong>Mode:</strong> {course.mode}
              </p>
              <p>
                <strong>Start Date:</strong> {course.startDate}
              </p>
            </div>
          </div>

          {/* Syllabus */}
          <h4 className="mb-3">What You Will Learn</h4>
          <ul>
            {course.syllabus.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-4">
            <button
              type="button"
              className="btn btn-success me-3 w-25"
              data-bs-toggle="modal"
              data-bs-target={`#modal-${id}`}
            >
              Enroll
            </button>

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
                    You've been successfully enrolled for the {course.name}{" "}
                    course.
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

            <NavLink to="/" className="btn btn-primary w-25">
              Back to Courses
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseDetails;
