import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Welcome from "./components/welcome";

import "./App.css";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Technologies from "./components/technologies";
import Projects from "./components/projects";
import Experience from "./components/experience";

function App() {
  const ref = useRef(null);
  const options = {
    smooth: true,
    // multiplier: 3,
    // smartphone: {
    //   smooth: true,
    // },
  };
  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <Welcome />
        <AboutMe />
        <Experience />
        <Skills />
        <Technologies />
        <Projects />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
