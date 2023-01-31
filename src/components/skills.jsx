import React from "react";
import "../css/style.css";
import Slideshow from "../utils/slideshow";

import { delay, skills } from "./../constants/slideshowConstants";
export default function Skills() {
  return (
    <div className="skills" data-scroll-section>
      <div className="skills-header-text">
        <h1>SKILLS & KNOWLEDGE </h1>
      </div>
      <div className="d-flex skills-body">
        <Slideshow items={skills} delay={delay} />
      </div>
    </div>
  );
}
