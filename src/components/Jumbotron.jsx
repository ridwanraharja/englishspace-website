import React from "react";
import jumbotronIcon from "../assets/img/jumbotron-icon.png";
import "../styles/components/Jumbotron.css";

const Jumbotron = () => {
  return (
    <div>
      <div className="bg-jumbotron jumbotron d-flex flex-column align-items-center justify-content-center bg-image p-5 text-center shadow-1-strong text-white">
        <img
          className="jumbotron-icon img-fluid"
          src={jumbotronIcon}
          alt="jumbotron-icon"
        />
        <h1 className="lead">Develop Student Skills & Academic</h1>
        <a className="btn btn-light btn-sm" href="#" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
