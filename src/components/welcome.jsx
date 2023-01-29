import React from "react";
import Typewriter from "typewriter-effect";
import profileImg from "../static/profile.jpg";
import "../css/style.css";
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
      <div className="credit">
        Photo by{" "}
        <a href="https://unsplash.com/@lightupphotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Cristina Anne Costello
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/cute-baby?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
    </div>
  );
}
