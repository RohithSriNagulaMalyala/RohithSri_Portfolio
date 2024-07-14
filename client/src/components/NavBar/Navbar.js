import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navbar.css'
const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      {/* Logo or Brand */}
      <Navbar.Brand href="#home" className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"  // Replace with your logo image URL
            // width="30"
            // height="30"
            // className="d-inline-block align-top"
            alt="Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px', borderRadius: '50%' , marginLeft:'10px' }}
          />
        </Navbar.Brand>
      <Container>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              className="nav-link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}  // Adjusted offset for navbar height
              duration={100} // Adjusted duration for smoother scrolling
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
