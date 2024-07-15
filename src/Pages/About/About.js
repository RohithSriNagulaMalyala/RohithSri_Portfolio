import React from 'react'
import "./About.css"
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
       <Jump>
      <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Hello! I'm NagulaMalyala Rohith Sri, a dedicated student currently pursuing my 4th year in BE AIDS. My academic journey has been enriched with a deep-seated passion for cutting-edge technologies, particularly in the realms of AI, data science, full-stack development (FSD), machine learning (ML), and deep learning (DL).

Driven by a curiosity to explore the frontiers of technology, I actively engage in projects and coursework that challenge me to innovate and problem-solve. Beyond technical skills, I possess strong soft skills including effective communication, teamwork, and adaptability. These skills have been honed through collaborative projects and extracurricular activities, where I've learned to navigate diverse perspectives and contribute meaningfully to team dynamics.

In addition to my academic pursuits, I am continually expanding my knowledge through self-directed learning and practical experience. My goal is to leverage my technical expertise and soft skills to make impactful contributions in AI and data science, pushing the boundaries of what's possible with innovative solutions.


              </p>
            </div>
          </div>
        </div>
        </Jump>
    </>
  )
}

export default About