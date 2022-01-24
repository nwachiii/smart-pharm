import React from "react";
import logo from "../../assets/logo.png";
import hamburger from "../../assets/icons/hamburger.png";
import userIcon from "../../assets/icons/nav-user-icon.png";
import { Nav, Navbar } from "react-bootstrap";
import "./navbar.css";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <img className="app__logo" src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav__links">
          <Nav.Link eventKey={1} href="#home">
            Home
          </Nav.Link>
          <Nav.Link eventKey={2} href="#blog">
            Blog
          </Nav.Link>
          <Nav.Link eventKey={3} href="#contact">
            Contact Us
          </Nav.Link>
          <Nav.Link className="nav__btn">
            <img src={hamburger} alt="" />
            <img src={userIcon} alt="" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
