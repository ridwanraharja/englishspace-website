import React from "react";

import "../styles/components/Profile.css";
// images
import Arba from "../assets/img/profile/Arba.jpg";
import Faiz from "../assets/img/profile/Faiz.jpg";
import Fatih from "../assets/img/profile/Fatih.jpg";
import Faza from "../assets/img/profile/Faza.jpg";
import Jane from "../assets/img/profile/Jane.jpg";
import Kharisma from "../assets/img/profile/Kharisma.jpg";
import Owen from "../assets/img/profile/Owen.jpg";
import Ridwan from "../assets/img/profile/Ridwan.jpg";
import Syaima from "../assets/img/profile/Syaima.jpg";
import CardProfile from "./CardProfile";

const Profile = () => {
  return (
    <section
      name="profile"
      className="profile text-center mx-auto"
      id="Profile"
    >
      <div className="line">
        <div className="team d-flex justify-content-center align-items-center text-center text-strong">
          <h2 className="h2-profile">TEAM PROFILE</h2>
        </div>
      </div>
      <div className="display-4 pro-text text-center mt-4">
        <h2 className="h2-profile">Meet Our Team</h2>
      </div>
      {/* <!-- executive --> */}
      <div className="container">
        <div className="display-4 text-center mt-4">
          <div className="bars"></div>
        </div>
        <div className=" container executive">
          <div className="box-profile d-flex flex-row flex-wrap justify-content-center mt-4">
            <CardProfile
              img={Arba}
              name="Arbadza Rido"
              position="Chief Executive"
              info={[
                "Founder of English Space",
                "Student of English Education at Jakarta State Islamic University",
              ]}
              instagram="arbadzarido"
            />
            <CardProfile
              img={Syaima}
              name="Syaima Ali"
              position="Chief Operation"
              info={[
                "Founder of English Space",
                "Student of English Education at Jakarta State Islamic University",
              ]}
              instagram="syaimaali"
            />
            <CardProfile
              img={Jane}
              name="Anjani Layla"
              position="Chief Human Resources"
              info={[
                "Founder of English Space",
                "Student of English Education at Jakarta State Islamic University",
              ]}
              instagram="anjanilyla"
            />
            <CardProfile
              img={Faza}
              name="Faza El Haya"
              position="Chief Financial"
              info={[
                "Founder of English Space",
                "Student of English Education at Jakarta State Islamic University",
              ]}
              instagram="fazahayaa"
            />
            <CardProfile
              img={Ridwan}
              name="Ridwan"
              position="Chief Technology"
              info={[
                "Founder of English Space",
                "Student of English Education at Jakarta State Islamic University",
              ]}
              instagram="ridwanraharja"
            />
            <CardProfile
              img={Owen}
              name="Owen Juliansyah"
              position="Chief Marketing"
              info={[
                "Founder of English Space",
                "Student of English Education at Jakarta State Islamic University",
              ]}
              instagram="owenjulians"
            />
            <CardProfile
              img={Kharisma}
              name="Kharisma Adhi"
              position="Chief Project"
              info={[
                "Founder of English Space",
                "Student of English Education at Jakarta State Islamic University",
              ]}
              instagram="kharisma.as"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
