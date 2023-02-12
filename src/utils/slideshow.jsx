import React from "react";

export default function Slideshow(props) {
  const { items, delay } = props;
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
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, items, delay]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {items.map((skill, index) => (
          <div
            className="skills-element"
            key={index}
            style={{ backgroundImage: `url(${skill.image})` }}
          >
            <div className="skills-content">
              <h2>{skill.title}</h2>
              <h5>
                <p>{skill.desc}</p>
              </h5>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {items.map((_, idx) => (
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
