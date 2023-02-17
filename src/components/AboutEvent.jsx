import React from "react";
import "../styles/components/AboutEvent.css";
import aboutEventimg from "../assets/img/aboutEvent.png";

const AboutEvent = () => {
  return (
    <section id="about-event">
      <br />
      <br />
      <div
        className="container contain-aboutEvent p-3"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="row p-3">
          <div className="col text-center p-3">
            <img
              src={aboutEventimg}
              alt="about-event"
              width="300px"
              className="img-event-21day"
            />
          </div>
          <div className="col">
            <h4 className="title-event-21day">
              About <br />
              21 Day English Challenge
            </h4>
            <hr size="5" width="200rem" />

            <p>
              21 Day English Challenge is a program initiated by englishspace.in
              by involving middle-level students. This program aims to develop
              interest in learning and form English language habits with
              supportive environmental facilities.
            </p>
            <a
              href="https://bit.ly/Register21DEC"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-sm fw-bold read-more mx-auto"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
