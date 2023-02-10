import React from "react";
import Typewriter from "typewriter-effect";
import profileImg from "../static/profile.jpg";
export default function Welcome() {
  return (
    <div
      className="d-flex welcome"
      data-scroll-section
      data-scroll
      data-scroll-speed="3"
    >
      <div className="d-flex welcome-header-container">
        <div className="welcome-header-img">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="welcome-header-text">
          <h1>ALEX </h1>
          <Typewriter
            options={{
              strings: ["Full-Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
