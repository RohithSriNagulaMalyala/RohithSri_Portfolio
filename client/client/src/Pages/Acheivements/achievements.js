import React from 'react';
import './achievments.css';

const achievements = [
  {
    title: 'Tecstasy 2022',
    description: 'Secured Third position for paper presentation organized by Dept of IT, CBIT',
    date: 'Mar 2022'
  },
  {
    title: 'Ideathon 2022',
    description: 'Secured First Position in the Competition',
    date: 'Jan 2022'
  },
  {
    title: 'Data Visualisation-Empowering Business with Effective Insights, TATA Forage',
    description: '',
    date: 'Aug 2023'
  }
];

const Achievements = () => {
  return (
    <div className="achievements">
      <h2>Achievements</h2>
      {achievements.map((achievement, index) => (
        <div className="achievement-item" key={index}>
          <h3>{achievement.title}</h3>
          <p>{achievement.description}</p>
          <p>Date: {achievement.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Achievements;
