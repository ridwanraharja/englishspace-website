import React from "react";
import "../styles/components/About.css";

const About = () => {
  return (
    <div className="container-about d-flex flex-column align-items-center justify-content-center">
      <div className="bg-about d-flex flex-column align-items-center justify-content-center bg-image text-center rounded text-white">
        <h1>About Us</h1>
        <p>
          English Space is a start up engaged in academics and self-development,
          English Space is founded for high school students by providing
          solutions to any existing learning problems, providing the best
          methods and programs to give reasons and achieve each student's
          learning goals. The program facilities that we provide are mentoring,
          training, and self-development counseling so that students can
          determine learning goals and manage their study time. English Space
          also provides forum and supportive environment to apply and practice
          English knowledge. English Space offers very affordable fees for
          students and also provides many scholarships for education-development
          of high school students in Indonesia.
        </p>
      </div>
    </div>
  );
};

export default About;
