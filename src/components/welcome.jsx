import React from "react";
import Typewriter from "typewriter-effect";
import profileImg from "../static/profile.jpg";
import "../css/style.css";
export default function Welcome() {
  return (
    <div
      className="welcome"
      data-scroll-section
      data-scroll
      data-scroll-speed="6"
    >
      <div className="welcome-header-img">
        <img src={profileImg} alt="Profile" />
      </div>
      <div className="welcome-header-text" data-scroll data-scroll-speed="6">
        <h1>AGENT J </h1>
        <Typewriter
          options={{
            strings: ["Full-Stack Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}
