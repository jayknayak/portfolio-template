import React, { useState } from "react";
import { projects } from "../constants/projectConstants";
import Card from "react-bootstrap/Card";
import "../css/style.css";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  const [show, setShow] = useState(false);
  const [projectDetails, setProjectDetails] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = (projectDetails) => {
    setShow(true);
    setProjectDetails(projectDetails);
  };
  return (
    <div className="projects" data-scroll-section>
      <div className="projects-header-text">
        <h1>PROJECTS</h1>
      </div>
      <div className="projects-body">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 p-4 d-flex d-flex-center" key={index}>
              <Card onClick={() => handleShow(project)}>
                <Card.Img src={project.icon} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <ProjectDetails
        show={show}
        onClose={handleClose}
        projectDetails={projectDetails}
      />
    </div>
  );
}
