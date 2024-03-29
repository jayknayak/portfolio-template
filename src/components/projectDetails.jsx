import React from "react";

import Modal from "react-bootstrap/Modal";

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
            <li key={index}>
              <h5>{item}</h5>
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
}
