// Activities.js

import React from 'react';
import './Extra&CoCurricular.css';

const activities = [
  {
    title: 'National Technology Day',
    description: 'Participated in technical quiz conducted by innovation cell of CBIT',
    date: '18th May 2023'
  },
  {
    title: 'IOT Workshop',
    description: 'Participated in IOT workshop and completed a project based on Home Automation',
    date: 'Dec 2022'
  },
  {
    title: 'Maths Quiz',
    description: 'Successfully qualified in National level E-Quiz organised by The Ramanujan math club, CBIT',
    date: 'Dec 2022'
  }
];

const Activities = () => {
  return (
    <div className="activities">
      <h2>Extra-Curricular and Co-Curricular Activities</h2>
      <div className="activity-items">
        {activities.map((activity, index) => (
          <div className="activity-item" key={index}>
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
            <p>Date: {activity.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
