import React,{useState} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navbar.css'
import photo from "../../Assets/pictures/photo2.jpg"
  
const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Close the navbar when a nav item is clicked
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
      <Container fluid>
        {/* Logo or Brand */}
        <Navbar.Brand href="#home" className="logo">
          <img
            src={photo}
          alt="profile_pic"
        
            style={{ width: '40px', height: '40px', marginRight: '10px', borderRadius: '50%' }}
          />
        </Navbar.Brand>
        
        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} className="ms-auto" />
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
              onClick={handleNavClick}
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
              onClick={handleNavClick}
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
              onClick={handleNavClick}
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
              onClick={handleNavClick}
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
              onClick={handleNavClick}
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
              onClick={handleNavClick}
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
              onClick={handleNavClick}
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
              onClick={handleNavClick}
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
              onClick={handleNavClick}
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
              onClick={handleNavClick}
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
              onClick={handleNavClick}
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
