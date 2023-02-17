import React from "react";
import "../styles/components/CardProfile.css";

const CardProfile = (props) => {
  const sosmed = `https://www.instagram.com/${props.instagram}/`;
  return (
    <div className="col-lg-4">
      <div className="card card-team-profile">
        <img
          src={props.img}
          className="card-img-top rounded-circle"
          alt={props.position}
        />
        <div className="card-body card-bd">
          <h5 className="card-title">{props.name}</h5>
          <h6>{props.position}</h6>
          <div className="bars-1"></div>
          <ul className="text-start">
            <li>{props.info[0]}</li>
            <li>{props.info[1]}</li>
          </ul>
          <div className="sosial-media">
            <a
              href={sosmed}
              className="text-white"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
