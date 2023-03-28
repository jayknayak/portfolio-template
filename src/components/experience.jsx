import React from "react";
import { mdiCircleDouble } from "@mdi/js";
import { Icon } from "@mdi/react";
import { experiences } from "../constants/experienceConstants";

export default function Experience() {
  return (
    <div className="experience">
      <div className="header-text">
        <h1>Experience</h1>
      </div>
      <div className="experience-body">
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div className="experience-container" key={index}>
              <Icon
                path={mdiCircleDouble}
                className="timeline-circle"
                size={1}
              />
              <h3>{experience.title}</h3>
              <h4>
                <p>
                  <strong>{experience.company}</strong> |{" "}
                  <small>
                    {experience.start} - {experience.end}
                  </small>
                </p>
              </h4>
              <h5>
                <p>{experience.skills}</p>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
