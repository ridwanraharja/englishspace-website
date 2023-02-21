import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { jobData } from "../utils/jobData";

const Careers = () => {
  const jobs = jobData;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner jobs={jobs} />
    </div>
  );
};

export default Careers;
