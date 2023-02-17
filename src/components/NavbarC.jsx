import React from "react";

import logo from "../assets/img/logo.png";

import "../styles/components/Navbar.css";

/* Bootstrap */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarC = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav nav-pills nav-justified">
            <Nav.Link
              className="navbar-link nav-item px-4 nav-link"
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="navbar-link nav-item px-4 nav-link"
              href="#about"
            >
              About
            </Nav.Link>
            <Nav.Link
              className="navbar-link nav-item px-4 nav-link"
              href="#profile"
            >
              Profile
            </Nav.Link>
            <Nav.Link
              className="navbar-link nav-item px-4 nav-link"
              href="#event"
            >
              Event
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
