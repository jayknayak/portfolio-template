import { useEffect, useRef, useState } from "react";
import "jquery/dist/jquery.min.js";

import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Technologies from "./components/technologies";
import Projects from "./components/projects";
import Experience from "./components/experience";

import "./App.css";

import "./css/style.css";

function App() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <Navbar />

      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        className="scrollspy-example"
        tabIndex="0"
      >
        <div id="home">
          <Welcome />
        </div>
        <div id="aboutMe">
          <AboutMe />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="technologies">
          <Technologies />
        </div>
        <div id="projects">
          <Projects />
        </div>
        {/* <div id="contact">
          <ContactMe />
        </div> */}
      </div>
    </main>
  );
}

export default App;
