import React from "react";
import { projects } from "../constants/projectConstants";
import Card from "react-bootstrap/Card";
import "../css/style.css";

export default function Projects() {
  return (
    <div className="projects" data-scroll-section>
      <div className="projects-header-text">
        <h1>Projects</h1>
      </div>
      <div className="projects-body">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 p-4 d-flex d-flex-center" key={index}>
              <Card>
                <Card.Img src={project.icon} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
