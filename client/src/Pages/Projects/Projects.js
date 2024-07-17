import React, { useState } from "react";
import "./Projects.css";
import Carousel from "react-bootstrap/Carousel";

const Projects = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "RealEstate Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ["Node", "Express", "React", "MongoDB"],
      images: [
        {
          url: "https://kit8.net/wp-content/uploads/edd/2021/12/kit8net-Realestate-Collection-Header.jpg",
          description: "First slide description for RealEstate Website"
        },

      ],
      liveLink:
        "https://github.com/RohithSriNagulaMalyala/RealEstateMern",
      sourceCode:
        "https://github.com/RohithSriNagulaMalyala/RealEstateMern",
      type: "Full Stack"
    },
    {
      id: 2,
      title: "Weather Data Analysis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ["R", "Clustering", "EDA", "Prediction"],
      images: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWHYGv6JkY8nefI8Ek8uKCQBO0QybzOuXAA&s",
          description: "First slide description for Weather Data Analysis"
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWHYGv6JkY8nefI8Ek8uKCQBO0QybzOuXAA&s",
          description: "Second slide description for Weather Data Analysis"
        }
        ,
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWHYGv6JkY8nefI8Ek8uKCQBO0QybzOuXAA&s",
          description: "Second slide description for Weather Data Analysis"
        }
      ],
      liveLink:
        "https://github.com/pupperemeritus/WeatherVoyageR",
      sourceCode:
        "https://github.com/pupperemeritus/WeatherVoyageR",
      type: "Data Science"
    },
    {
      id: 3,
      title: "Time Complexity Analysis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ["Python", "Sorting algorithms", "Time Complexity"],
      images: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1kQIxp7EukVyviz8hley98LXJ6PhZE5Qs0ylgo76oPnuIupyexXQZ9SEbyd9eMP6Lqw&usqp=CAU",
          description: "First slide description for Time Complexity Analysis"
        }
      ],
      liveLink: "https://example.com",
      sourceCode: "https://example.com",
      type: "Algorithm Analysis"
    },
  ];

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setShowCarousel(true);
  };

  const handleCloseCarousel = () => {
    setShowCarousel(false);
    setSelectedProject(null); // Reset selected project
  };

  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">{project.type}</span>
                  <img
                    src={project.images[0].url}
                    alt={project.title}
                    className="img-fluid"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">{project.title}</h6>
                  </div>
                  <div className="technologies-container">
                    <div className="technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="card-detail-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="links">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ad-btn"
                    >
                      Live Link
                    </a>{" "}
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ad-btn"
                    >
                      View Code
                    </a>{" "}
                    <button
                      className="ad-btn"
                      onClick={() => handleViewDetails(project)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Modal */}
      {showCarousel && selectedProject && (
        <div className="modal-container">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseCarousel}>
              &times;
            </button>
            <Carousel>
              {/* First Slide */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={selectedProject.images[0].url}
                  alt={selectedProject.title}
                />
                <Carousel.Caption>
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.description}</p>
                  <div className="technologies">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ad-btn"
                    >
                      Live Link
                    </a>{" "}
                    <a
                      href={selectedProject.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ad-btn"
                    >
                      View Code
                    </a>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Second Slide (Dynamic Description) */}
              {selectedProject.images[1] && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={selectedProject.images[1].url}
                    alt={selectedProject.title + " Second Slide"}
                  />
                  <Carousel.Caption>
                    <h3>{selectedProject.title} (Second Slide)</h3>
                    <p>{selectedProject.images[1].description}</p>
                    <div className="technologies">
                      {/* <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ad-btn"
                      >
                        Live Link
                      </a>{" "}
                      <a
                        href={selectedProject.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ad-btn"
                      >
                        View Code
                      </a> */}
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              )}
              {selectedProject.images[1] && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={selectedProject.images[2].url}
                    alt={selectedProject.title + " Third Slide"}
                  />
                  <Carousel.Caption>
                    <h3>{selectedProject.title} (Third Slide)</h3>
                    <p>{selectedProject.images[1].description}</p>
                    <div className="technologies">
                      {/* <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ad-btn"
                      >
                        Live Link
                      </a>{" "}
                      <a
                        href={selectedProject.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ad-btn"
                      >
                        View Code
                      </a> */}
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              )}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
