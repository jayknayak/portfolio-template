import React from "react";
import Icon from "@mdi/react";
import { skills } from "./../constants/slideshowConstants";
export default function Skills() {
  return (
    <div className="skills">
      <div className="header-text">
        <h1>SKILLS & KNOWLEDGE </h1>
      </div>
      <div className="display-flex skills-body">
        {/* <Slideshow items={skills} delay={delay} /> */}
        <div className="row">
          {skills.map((skill, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="mb-4">
                  <div className="d-flex gap">
                    <Icon path={skill.icon} size={1} />
                    <h3>{skill.title}</h3>
                  </div>
                  <div className="d-flex gap text-align-justify">
                    <p>{skill.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
