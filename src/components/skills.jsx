import React from "react";
import "../css/style.css";
import Slideshow from "../utils/slideshow";

export default function Skills() {
  return (
    <div className="skills" data-scroll-section>
      <div className="skills-header-text">
        <h1>SKILLS & KNOWLEDGE </h1>
      </div>
      <div className="d-flex skills-body">
        <Slideshow />
      </div>
    </div>
  );
}
