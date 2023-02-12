import React from "react";
import Typewriter from "typewriter-effect";
import profileImg from "../static/profile.jpg";

import Icon from "@mdi/react";
import { mdiArrowDown } from "@mdi/js";
import { mdiArrowUp } from "@mdi/js";

import $ from "jquery";
export default function Welcome() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-bottom").fadeOut("slow");
    } else {
      $(".scroll-to-bottom").fadeIn("slow");
    }
  });
  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  return (
    <div>
      <div
        className="display-flex d-flex-center welcome"
        data-scroll-section
        data-scroll
        data-scroll-speed="3"
      >
        <div className="row d-flex-center welcome-header-container">
          <div className="col-md-3 display-flex d-flex-center welcome-header-img">
            <img src={profileImg} alt="Profile" />
          </div>
          <div className="col-md-3 d-flex-column welcome-header-text">
            <h1>JAY </h1>
            <h1>
              <Typewriter
                options={{
                  strings: ["Full-Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        </div>
      </div>
      <div className="scroll-to-bottom">
        <Icon path={mdiArrowDown} size={1} />
      </div>
      <a href="#home" className="back-to-top">
        <Icon path={mdiArrowUp} size={1} />
      </a>
    </div>
  );
}
