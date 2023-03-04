import React from "react";
import "../styles/components/Visi.css";

const Visi = () => {
  return (
    <div className="visi">
      <div className="container">
        <div className="row text-black">
          <div className="vision col-md-6 text-center">
            <h1 className="h1-vision text-center mb-3">We Want to</h1>
            <div className="bars mb-3"></div>
            <p className="p-vision">
              Being a community platform that has a big role in helping the
              process of learning and applying good English for English learners
              & teachers every day.
            </p>
          </div>
          <div className="mission col-md-6">
            <h1 className="h1-vision text-center mb-3">With Commitment to</h1>
            <div className="bars mb-3"></div>
            <ol className="mission-ol text-start">
              <li>
                Be a friend to English learners & teachers by sharing insightful
                information on learning and applying English.
              </li>
              <li>
                Building an active community for English learners & teachers to
                form good language habits and consistency
              </li>
              <li>
                Become a trusted platform for English learners & teachers so as
                to create a free and interactive learning environment to share
                their progress in speaking English.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visi;
