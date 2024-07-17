import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../Assets/Docs/Rohith_Sri_NagulaMalyala.pdf";
// import  Resume from "../../src/Assets/Docs/Rohith_Sri_NagulaMalyala.pdf"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const [highlightName, setHighlightName] = useState(false);

  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    // Start highlighting after a delay (e.g., 1 second)
    const timer = setTimeout(() => {
      setHighlightName(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
        <Fade bottom>
            <p className={`my-name ${highlightName ? "highlight" : ""}`}>
              Hi 👋 I'm NagulaMalyala Rohith Sri
            </p>
          </Fade>
          <Fade right>
            <h2> I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "Mern Stack Developer!",
                    "React native developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=7386699755"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="NagulaMalyala Rohith Sri.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;