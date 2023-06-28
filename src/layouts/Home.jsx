import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarH from "../components/NavbarH";

const Home = (props) => {
  return (
    <div>
      <NavbarH />
      <div>
        <Outlet {...props} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
