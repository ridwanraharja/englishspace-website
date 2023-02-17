import React from "react";
import "../styles/components/Banner.css";
import icon from "../assets/img/jumbotron-icon.png";
import { MdLocationOn, MdOutlineWork } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <div class="p-4 p-md-5 mb-4 text-white rounded-bottom bg-dark">
        <div class="col-md-12 px-0">
          <h1 class="display-4 fst-italic text-center">Careers</h1>
          {/* <p class="lead my-3">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>
          <p class="lead mb-0">
            <a href="#" class="text-white fw-bold">
              Continue reading...
            </a>
          </p> */}
        </div>
      </div>

      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">Columns with icons</h2>
        <div class="gap-feature d-flex justify-content-center align-items-center row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div class="feature col border p-3 rounded">
            <div className="d-flex justify-content-center align-items-center">
              <div class="feature-icon bg-gradient">
                <img className="icon" src={icon} alt="icon" />
              </div>
              <div className="container job-title">
                <h6>Front-end Developer Intern</h6>
                <p>PT Ruang Pendidikan Digital</p>
              </div>
            </div>
            <h6>
              <MdLocationOn /> Tangerang Selatan
            </h6>
            <p>
              <MdOutlineWork /> Internship
            </p>
            <a href="#" class="btn btn-primary">
              Primary button
            </a>
          </div>
          <div class="feature col border p-3 rounded">
            <div className="d-flex justify-content-center align-items-center">
              <div class="feature-icon bg-gradient">
                <img className="icon" src={icon} alt="icon" />
              </div>
              <div className="container job-title">
                <h6>Front-end Developer Intern</h6>
                <p>PT Ruang Pendidikan Digital</p>
              </div>
            </div>
            <h6>
              <MdLocationOn /> Tangerang Selatan
            </h6>
            <p>
              <MdOutlineWork /> Internship
            </p>
            <a href="#" class="btn btn-primary">
              Primary button
            </a>
          </div>
          <div class="feature col border p-3 rounded">
            <div className="d-flex justify-content-center align-items-center">
              <div class="feature-icon bg-gradient">
                <img className="icon" src={icon} alt="icon" />
              </div>
              <div className="container job-title">
                <h6>Front-end Developer Intern</h6>
                <p>PT Ruang Pendidikan Digital</p>
              </div>
            </div>
            <h6>
              <MdLocationOn /> Tangerang Selatan
            </h6>
            <p>
              <MdOutlineWork /> Internship
            </p>
            <a href="#" class="btn btn-primary">
              Primary button
            </a>
          </div>
          <div class="feature col border p-3 rounded">
            <div className="d-flex justify-content-center align-items-center">
              <div class="feature-icon bg-gradient">
                <img className="icon" src={icon} alt="icon" />
              </div>
              <div className="container job-title">
                <h6>Front-end Developer Intern</h6>
                <p>PT Ruang Pendidikan Digital</p>
              </div>
            </div>
            <h6>
              <MdLocationOn /> Tangerang Selatan
            </h6>
            <p>
              <MdOutlineWork /> Internship
            </p>
            <a href="#" class="btn btn-primary">
              Primary button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
