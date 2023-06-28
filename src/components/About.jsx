import React from "react";
import "../styles/components/About.css";

const About = () => {
  return (
    <div name="about" className="container-about">
      <div className="bg-about d-flex flex-column align-items-center justify-content-center bg-image text-center rounded text-white">
        <h1 className="h1-about">
          We Believe{" "}
          <span className="span-about">
            English is Important, and Everyone Can Learn It.
          </span>
        </h1>
      </div>
    </div>
  );
};

export default About;
