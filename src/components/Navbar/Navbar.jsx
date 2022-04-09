import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-class">
      <div className="left">
        <div className="name">aref</div>
        <div className="daynight">daynight</div>
      </div>
      <div className="right">
        <div className="options">
          <ul>
            <li>Home</li>
            <li>Experience</li>
            <li>Blog</li>
            <li>Portfolio</li>
            <li>More</li>
          </ul>
        </div>
        <button className="button">Contact</button>
      </div>
    </div>
  );
}
