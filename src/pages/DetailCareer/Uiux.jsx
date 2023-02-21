import React, { useEffect } from "react";
import DetailCareerContent from "../../components/DetailCareerContent";
import { jobData } from "../../utils/jobData";

const Uiux = () => {
  const datas = jobData[3];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <DetailCareerContent data={datas} />
    </div>
  );
};

export default Uiux;
