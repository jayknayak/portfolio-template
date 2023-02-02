import React from "react";
import "../css/style.css";

export default function AboutMe() {
  return (
    <div className="about" data-scroll-section>
      <div className="header-text">
        <h1>ABOUT ME </h1>
      </div>
      <div className="about-body-text">
        <h2>Full-Stack Web Developer</h2>
        <div style={{ marginTop: "5%" }}>
          <p>
            I am a Full Stack Web developer. I aim to become a subject matter
            expert in developing highly scalable, efficient, and fully- secure
            software systems with the best engineering practices.
          </p>
          <p>
            I have over 6 years of experience in Designing, Developing, Testing,
            and Deploying Web Applications.
          </p>
          <p>
            Designed and implemented three highly scalable web applications on
            the production environment delivering business requirements of 3
            Fortune Global 500, 1 Public Organization, 2 different MNCs, and 1
            Community.
          </p>
          <p>Education - Master of Applied Science (MASc).</p>
        </div>
      </div>
    </div>
  );
}
