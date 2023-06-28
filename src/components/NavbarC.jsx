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

const NavbarC = () => {
  // const location = useLocation().pathname;
  // console.log(location);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Links to="/">
          <Navbar>
            <img
              src={logo}
              height="30"
              className="logo-icon d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar>
        </Links>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav nav-pills nav-justified">
            <Links to="/">
              <Nav className="navbar-link nav-item nav-link">Home</Nav>
            </Links>
            <Links to="/">
              <Nav className="navbar-link nav-item nav-link">About</Nav>
            </Links>
            <Links to="/">
              <Nav className="navbar-link nav-item nav-link">Profile</Nav>
            </Links>
            <Links to="/">
              <Nav className="navbar-link nav-item nav-link">Event</Nav>
            </Links>
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

export default NavbarC;
