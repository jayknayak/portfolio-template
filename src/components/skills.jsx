import React from "react";
import Slideshow from "../utils/slideshow";

import { delay, skills } from "./../constants/slideshowConstants";
export default function Skills() {
  return (
    <div className="skills">
      <div className="header-text">
        <h1>SKILLS & KNOWLEDGE </h1>
      </div>
      <div className="display-flex skills-body">
        <Slideshow items={skills} delay={delay} />
      </div>
    </div>
  );
}
