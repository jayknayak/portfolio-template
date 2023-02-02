import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../css/style.css";
import Icon from "@mdi/react";
import { technologies } from "../constants/technologiesConstants";

export default function Technologies() {
  return (
    <div className="technologies" data-scroll-section>
      <div className="header-text">
        <h1>TECHNOLOGIES </h1>
      </div>
      <div className="technologies-body">
        <div className="row">
          {technologies.map((technologyCol, index) => {
            return (
              <div className="col-md-6" key={index}>
                {technologyCol.map((technology, index2) => (
                  <div className="mb-4" key={index2}>
                    <div className="d-flex gap">
                      <Icon path={technology.icon} size={1} />
                      <h5>{technology.name}</h5>
                    </div>
                    <ProgressBar
                      now={technology.percent}
                      animated
                      visuallyHidden
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <div className="technologies-note">
          <p>(% are relative not absolute)</p>
        </div>
      </div>
    </div>
  );
}
