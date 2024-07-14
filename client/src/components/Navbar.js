import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">MyLogo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              className="nav-link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}  
              duration={100} 
            >
              Home
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              About
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              Education
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="techstack"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              Techstack
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              Projects
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              Work Experience
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="certifications"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              Certifications
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="roles"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              Roles & Responsibilities
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="achievements"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              Achievements
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="activities"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              Extra & Co-Curricular
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
