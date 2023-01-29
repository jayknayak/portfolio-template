import React from "react";
import "../css/style.css";
import ProgressBar from "react-bootstrap/ProgressBar";

import Icon from "@mdi/react";
import {
  mdiLanguageJavascript,
  mdiReact,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiBootstrap,
  mdiDocker,
  mdiAws,
  mdiLanguagePython,
  mdiLanguageJava,
  mdiDatabaseSearch,
  mdiGit,
  mdiServerSecurity,
  mdiPenguin,
} from "@mdi/js";
const technologies = [
  [
    { name: "JavaScript", percent: 85, icon: mdiLanguageJavascript },
    { name: "React", percent: 80, icon: mdiReact },
    { name: "HTML5", percent: 90, icon: mdiLanguageHtml5 },
    { name: "CSS3", percent: 85, icon: mdiLanguageCss3 },
    { name: "Bootstrap", percent: 80, icon: mdiBootstrap },
    { name: "Docker", percent: 85, icon: mdiDocker },
    { name: "AWS", percent: 50, icon: mdiAws },
  ],
  [
    { name: "Python", percent: 90, icon: mdiLanguagePython },
    { name: "Django", percent: 90, icon: mdiLanguagePython },
    { name: "Java", percent: 95, icon: mdiLanguageJava },
    { name: "SQL", percent: 85, icon: mdiDatabaseSearch },
    { name: "Git", percent: 85, icon: mdiGit },
    { name: "NGINX", percent: 70, icon: mdiServerSecurity },
    { name: "Linux", percent: 80, icon: mdiPenguin },
  ],
];

export default function Technologies() {
  return (
    <div className="technologies" data-scroll-section>
      <div className="technologies-header-text">
        <h1>TECHNOLOGIES </h1>
      </div>
      <div className="technologies-body">
        <div className="row">
          {technologies.map((technologyCol, index) => {
            return (
              <div className="col-md-6" key={index}>
                {technologyCol.map((technology, index2) => (
                  <div className="mb-4" key={index2}>
                    <div className="d-flex space-between">
                      <Icon path={technology.icon} size={1} />
                      <h5>{technology.name}</h5>
                    </div>
                    <ProgressBar
                      //   className="progress-bar"
                      now={technology.percent}
                      visuallyHidden
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
