import React from "react";
import jumbotronIcon from "../assets/img/jumbotron-icon.png";
import "../styles/components/Jumbotron.css";
import { Link } from "react-scroll";

const Jumbotron = () => {
  return (
    <div name="home">
      <div className="bg-jumbotron jumbotron d-flex flex-column align-items-center justify-content-center bg-image p-5 text-center shadow-1-strong text-white">
        <img
          className="jumbotron-icon img-fluid"
          src={jumbotronIcon}
          alt="jumbotron-icon"
        />
        <h1 className="lead">Developing English Learners Community</h1>
        <a
          href="https://bit.ly/Register21DEC"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-primary btn-jumbot px-3"
        >
          Join Community
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
