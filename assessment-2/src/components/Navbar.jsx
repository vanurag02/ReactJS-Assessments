import React, { Component } from "react";
import logo from "../assets/logo.png";
import "../style/navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar shadow">
        <div className="nav-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </nav>
    );
  }
}

export default Navbar;
