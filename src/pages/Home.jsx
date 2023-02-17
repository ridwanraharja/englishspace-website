import React from "react";
import Jumbotron from "../components/Jumbotron";
import Visi from "../components/Visi";
import About from "../components/About";
import Profile from "../components/Profile";
import Event from "../components/Event";
import AboutEvent from "../components/AboutEvent";
import Timeline from "../components/Timeline";

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <About />
      <Visi />
      <Profile />
      <Event />
      <AboutEvent />
      <Timeline />
    </div>
  );
};

export default Home;
