import React from "react";
import "../styles/components/Visi.css";

const Visi = () => {
  return (
    <div className="visi">
      <div className="container">
        <div className="row text-black">
          <div className="vision col-md-6 text-center">
            <h2 className="text-center mb-3">Vision</h2>
            <div className="bars mb-3"></div>
            <p>
              To become a world-className company that can facilitate the
              learning needs of students through the best programs and methods
              based on the science of self-development.
            </p>
          </div>
          <div className="mission col-md-6">
            <h2 className="text-center mb-3">Mission</h2>
            <div className="bars mb-3"></div>
            <ol className="mission-ol text-start">
              <li>
                Helping students to be more enthusiastic and productive in the
                learning process.
              </li>
              <li>
                Helping students to find goals and reasons for learning and
                growing.
              </li>
              <li>
                Helping students to achieve their goals or reasons for learning
                and growing with the programs that have been provided.
              </li>
              <li>
                Provide solutions to each student's problems in the learning
                process.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visi;
