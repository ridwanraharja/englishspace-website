import React from "react";
import "../styles/components/Banner.css";
import CardCareer from "./CardCareer";

const Banner = (props) => {
  const datas = props.jobs;

  return (
    <div>
      <div className="p-4 p-md-5 mb-4 text-white rounded-bottom bg-dark">
        <div className="col-md-12 px-0">
          <h1 className="display-4 fst-italic text-center">Careers</h1>
        </div>
      </div>

      <div className="container px-4 py-5 mb-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Careers EnglishSpace</h2>
        <div className="gap-feature d-flex justify-content-center align-items-center row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {/* Card Career  */}
          <CardCareer data={datas[0]} />
          <CardCareer data={datas[1]} />
          <CardCareer data={datas[2]} />
          <CardCareer data={datas[3]} />
          <CardCareer data={datas[4]} />
          <CardCareer data={datas[5]} />
          <CardCareer data={datas[6]} />
          <CardCareer data={datas[7]} />
          <CardCareer data={datas[8]} />
          <CardCareer data={datas[9]} />
          <CardCareer data={datas[10]} />
          <CardCareer data={datas[11]} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
