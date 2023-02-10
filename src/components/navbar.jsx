import React from "react";

export default function Navbar() {
  return (
    <nav id="navbar-example2" className="navbar sticky-top navbar-light px-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutMe">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experience">
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#technologies">
            Technologies
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
