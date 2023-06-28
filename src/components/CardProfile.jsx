import React from "react";
import "../styles/components/CardProfile.css";

import { AiFillInstagram } from "react-icons/ai";

const CardProfile = (props) => {
  const sosmed = `https://www.instagram.com/${props.instagram}/`;
  return (
    <div>
      <div className=" card card-team-profile">
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
              <AiFillInstagram className="icon-ig" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
