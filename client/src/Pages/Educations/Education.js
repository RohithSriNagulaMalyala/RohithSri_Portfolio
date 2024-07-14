import React from 'react';
import { MdSchool } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';

const Education = () => {
  return (
    <div className="education" id="education">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Education Details</h2>
      <hr />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2021 - 2025"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">B.E - Artificila Intelligence and Data Science</h3>
          <h4 className="vertical-timeline-element-subtitle">Chaitanya Bharathi Institute of Technology, Hyderabad</h4>
          <p>CGPA: 9.25/10</p> {/* Example: Replace with actual CGPA or percentage */}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2018 - 2020"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Intermediate</h3>
          <h4 className="vertical-timeline-element-subtitle">Brilliant Junior College, Hyderabad</h4>
          <p>Percentage: 87.4%</p> {/* Example: Replace with actual CGPA or percentage */}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2018"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">10th , CBSE</h3>
          <h4 className="vertical-timeline-element-subtitle">Carmel conbvnt high school, Mancherial</h4>
          <p>Percentage: 82%</p> {/* Example: Replace with actual CGPA or percentage */}
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
