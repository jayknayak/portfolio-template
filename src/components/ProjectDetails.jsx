import React from "react";

import Modal from "react-bootstrap/Modal";
import "../css/style.css";

export default function ProjectDetails(props) {
  const { show, onClose, projectDetails } = props;

  if (!projectDetails) return;
  return (
    <Modal
      show={show}
      onHide={onClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{projectDetails.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {projectDetails.desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
}
