import React from "react";
import "../css/style.css";
import fullStack from "../static/full-stack.jpg";
import webDesign from "../static/web-design.jpg";
import apiDesign from "../static/api-design.jpg";
import scripting from "../static/scripting.jpg";
import problemSolving from "../static/problem-solving.jpg";
import deployment from "../static/deployment.jpg";
import requirementsGathering from "../static/requirements-gathering.jpg";

// const skills = ["#0088FE", "#00C49F", "#FFBB28"];
const skills = [
  {
    title: "Full-Stack Web Development",
    desc: "Design and Develop Back-end & Front-end APIs and Commercial, Community, & Portfolio websites, etc.",
    image: fullStack,
  },
  {
    title: "Web Designs",
    desc: "Design and Develop Back-end & Front-end APIs and Commercial, Community, & Portfolio websites, etc.",
    image: webDesign,
  },
  {
    title: "API Designs",
    desc: "Design and Develop Back-end & Front-end APIs and Commercial, Community, & Portfolio websites, etc.",
    image: apiDesign,
  },
  {
    title: "Scripting",
    desc: "Design and Develop Back-end & Front-end APIs and Commercial, Community, & Portfolio websites, etc.",
    image: scripting,
  },
  {
    title: "Problem Solving",
    desc: "Design and Develop Back-end & Front-end APIs and Commercial, Community, & Portfolio websites, etc.",
    image: problemSolving,
  },
  {
    title: "Deployment",
    desc: "Design and Develop Back-end & Front-end APIs and Commercial, Community, & Portfolio websites, etc.",
    image: deployment,
  },
  {
    title: "Requirements Gathering",
    desc: "Design and Develop Back-end & Front-end APIs and Commercial, Community, & Portfolio websites, etc.",
    image: requirementsGathering,
  },
];
const delay = 5000;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === skills.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {skills.map((skill, index) => (
          <div
            className="skills-element"
            key={index}
            style={{ backgroundImage: `url(${skill.image})` }}
          >
            <div className="skills-content">
              <h2>{skill.title}</h2>
              <p>{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {skills.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
