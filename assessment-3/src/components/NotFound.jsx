import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class NotFound extends Component {
  render() {
    return (
      <div className="text-center mt-5">
        <h2>404 - Page Not Found</h2>
        <NavLink to="/" className="btn btn-primary mt-3">
          Back to Home
        </NavLink>
      </div>
    );
  }
}

export default NotFound;
