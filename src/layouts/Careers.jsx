import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarC from "../components/NavbarC";

const Careers = (props) => {
  return (
    <div>
      <NavbarC />
      <div>
        <Outlet {...props} />
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
