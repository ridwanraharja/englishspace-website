import React from "react";

import "../styles/components/Profile.css";
// images
import exeArba from "../assets/img/profile/exeArba.png";
import CardProfile from "./CardProfile";

const Profile = () => {
  return (
    <section className="profile text-center mx-auto" id="Profile">
      <div className="line">
        <div className="team text-center text-strong">
          <h2>TEAM PROFILE</h2>
        </div>
      </div>
      <div className="display-4 pro-text text-center mt-3">
        <h2>Meet Our Team</h2>
      </div>
      {/* <!-- executive --> */}
      <div className="container">
        <div className="display-4 text-center">
          <h4>Executive</h4>
          <div className="bars"></div>
        </div>
        <div className="container executive">
          <div className="row justify-content-center gap-5">
            <CardProfile
              img={exeArba}
              name="Arbadza Rido"
              position="Chief Executive"
              info={[
                "Founder of English Space",
                "Student of English Education at Jakarta State Islamic University",
              ]}
              instagram="arbadzarido"
            />
            <CardProfile
              img={exeArba}
              name="Arbadza Rido"
              position="Chief Executive"
              info={[
                "Founder of English Space",
                "Student of English Education at Jakarta State Islamic University",
              ]}
              instagram="arbadzarido"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
