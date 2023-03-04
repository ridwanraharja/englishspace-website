import React from "react";
import "../styles/components/Banner.css";
import icon from "../assets/img/jumbotron-icon.png";
import { MdLocationOn, MdOutlineWork } from "react-icons/md";
import { Link } from "react-router-dom";

const CardCareer = (props) => {
  return (
    <div className="feature col border p-3 rounded">
      <div className="d-flex justify-content-center align-items-center">
        <div className="feature-icon bg-gradient">
          <img className="icon" src={icon} alt="icon" />
        </div>
        <div className="container job-title">
          <h6>{props.data.titleJob}</h6>
          <p>PT Ruang Pendidikan Digital</p>
        </div>
      </div>
      <h6>
        <MdLocationOn /> Tangerang Selatan
      </h6>
      <p>
        <MdOutlineWork /> -
      </p>
      <Link
        to={`/careers/${props.data.url}`}
        className="btn btn-primary btn-banner"
      >
        Apply Now!
      </Link>
    </div>
  );
};

export default CardCareer;
