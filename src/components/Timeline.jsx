import React from "react";
import "../styles/components/Timeline.css";

const Timeline = () => {
  return (
    <section id="timeline">
      <div className="container-fluid con-timeline text-center p-5">
        <i className="fa-regular fa-clock fs-1" data-aos="fade-up"></i>
        <h2 className="text-center title-timeline" data-aos="fade-up">
          Timeline
        </h2>
        <div className="container table-timeline">
          <div
            className="timeline-block timeline-block-right"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="marker"></div>
            <div className="timeline-content right">
              <h4>Registration</h4>
              <span>August 25th - September 20th 2022</span>
            </div>
          </div>

          <div
            className="timeline-block timeline-block-left"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="marker"></div>
            <div className="timeline-content left">
              <h4>Open Chat</h4>
              <span>Thursday, September 22th 2022</span>
            </div>
          </div>

          <div
            className="timeline-block timeline-block-right"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="marker"></div>
            <div className="timeline-content right">
              <h4>Opening Speech</h4>
              <span>Sunday, September 25th 2022</span>
            </div>
          </div>

          <div
            className="timeline-block timeline-block-left"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="marker"></div>
            <div className="timeline-content left">
              <h4>Live Session</h4>
              <span>Thursday, September 29th 2022</span>
            </div>
          </div>

          <div
            className="timeline-block timeline-block-right"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="marker"></div>
            <div className="timeline-content right">
              <h4>Workshop</h4>
              <span>Sunday, October 2nd 2022</span>
            </div>
          </div>

          <div
            className="timeline-block timeline-block-left"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="marker"></div>
            <div className="timeline-content left">
              <h4>Submit Study Modeling Canvas</h4>
              <span>October 3th - October 8th 2022</span>
            </div>
          </div>

          <div
            className="timeline-block timeline-block-right"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="marker"></div>
            <div className="timeline-content right">
              <h4>Live Session 2</h4>
              <span>Thursday, October 6th 2022</span>
            </div>
          </div>

          <div
            className="timeline-block timeline-block-left"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="marker"></div>
            <div className="timeline-content left">
              <h4>Talkshow</h4>
              <span>Sunday, October 9th 2022</span>
            </div>
          </div>

          <div
            className="timeline-block timeline-block-right"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="marker"></div>
            <div className="timeline-content right">
              <h4>Awarding & Closing Graduation</h4>
              <span>Thursday, October 13th 2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
