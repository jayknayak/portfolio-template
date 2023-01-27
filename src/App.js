import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Welcome from "./components/welcome";

import "./App.css";

function App() {
  const ref = useRef(null);
  const options = {
    smooth: true,
    multiplier: 2,
    smartphone: {
      smooth: true,
    },
  };
  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <Welcome />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
