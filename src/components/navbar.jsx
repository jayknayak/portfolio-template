import React from "react";

import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";

export default function Navbar() {
  return (
    <nav id="navbar" className="navbar sticky-top navbar-light px-3">
      <ul className="nav">
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
        {/* <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li> */}
      </ul>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/jayknayak">
            <Icon path={mdiGithub} size={1} />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/jayknayak/">
            <Icon path={mdiLinkedin} size={1} />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://twitter.com/jayknayak">
            <Icon path={mdiTwitter} size={1} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
