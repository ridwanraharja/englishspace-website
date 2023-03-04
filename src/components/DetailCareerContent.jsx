import React from "react";
import icon from "../assets/img/jumbotron-icon.png";
import { MdAttachMoney, MdWork } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiSandsOfTime } from "react-icons/gi";
import { Link } from "react-router-dom";

import "../styles/pages/DetailCareer.css";

const DetailCareerContent = (props) => {
  return (
    <div key={props.data.id} className="box-content mx-5 mt-5">
      <div className="box-job border mx-5 rounded">
        <div className="box-icon d-flex align-items-end">
          <div className=" job-icon bg-gradient">
            <img className="icon" src={icon} alt="icon" />
          </div>
          <div className="job-summary-1">
            <h2>{props.data.titleJob}</h2>
            <p>PT Ruang Pendidikan Digital</p>
          </div>
        </div>
        <div className="job-summary-2">
          <p>
            <MdAttachMoney />
            &nbsp; Perusahaan tidak menampilkan gaji
          </p>
          <p>
            <HiBuildingOffice2 />
            &nbsp; {props.data.department}
          </p>
          <p>
            <GiSandsOfTime />
            &nbsp; -
          </p>
          <p>
            <MdWork />
            &nbsp; kurang dari 1 tahun pengalaman
          </p>
          {/* <Link to={{ pathname: props.data.link }} target="_blank"></Link> */}
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf1r7bI3sON1FhFYFJtlA8QkQ38bHqQ32SjrOaRxicI5XUlGA/viewform"
            className="btn btn-primary btn-job px-5 mt-2"
          >
            Apply
          </a>
        </div>
      </div>

      <hr className="m-5" />

      <div className="job-desc m-5">
        <div className="box-skills mb-5">
          <h1 className="desc mb-3">Skills</h1>
          <div className="skills d-flex  d-flex flex-wrap align-items-center">
            {props.data.skills.map((apple) => (
              <div className="p-skill">{apple}</div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="desc mb-3">
            Deskripsi pekerjaan Frontend Developer EnglishSpace
          </h1>
          <h1 className="desc mb-3">Job Qualification</h1>
          <ul className="desc-ul">
            {props.data.qualifications.map((apple) => (
              <li>{apple}</li>
            ))}
          </ul>

          <h1 className="desc mb-3">Job Description</h1>
          <ul className="desc-ul">
            {props.data.description.map((apple) => (
              <li cl>{apple}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailCareerContent;
