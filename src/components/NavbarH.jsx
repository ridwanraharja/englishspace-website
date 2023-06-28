import React from "react";

import { Link as Links } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";

import "../styles/components/Navbar.css";

/* Bootstrap */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const NavbarH = () => {
  // const location = useLocation().pathname;
  // console.log(location);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Link to="home" smooth={true} offset={-35} duration={1}>
          <Navbar>
            <img
              src={logo}
              height="30"
              className="logo-icon d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav nav-pills nav-justified">
            <Link to="home" smooth={true} offset={-35} duration={1}>
              <Nav className="navbar-link nav-item nav-link">Home</Nav>
            </Link>
            <Link to="about" smooth={true} offset={-112} duration={1}>
              <Nav className="navbar-link nav-item nav-link">About</Nav>
            </Link>
            <Link to="profile" smooth={true} offset={-70} duration={1}>
              <Nav className="navbar-link nav-item nav-link">Profile</Nav>
            </Link>
            <Link to="event" smooth={true} offset={-60} duration={1}>
              <Nav className="navbar-link nav-item nav-link">Event</Nav>
            </Link>
            <Links to="/careers">
              <Button variant="primary" className="btn-purple w-100">
                Careers
              </Button>
            </Links>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarH;
