import React from 'react';
import './roles.css';

const roles = [
  {
    club: 'Chaitanya Spandana Club',
    position: 'Volunteer',
    duration: 'Sept 2022 - Sept 2023',
    events: 'Assisted in organizing various social awareness campaigns.'
  },
  {
    club: 'UCC Club, CBIT Hyderabad',
    position: 'Member of Organizing Committee, Head of Design Team',
    duration: 'Jan 2023 - Jan 2024',
    events: 'Led the design and visual aspects of club events.'
  },
  {
    club: 'Chaitanya Svaastya Club, CBIT Hyderabad',
    position: 'Technical and Documentation Head',
    duration: 'Sept 2023 - Current',
    events: 'Responsible for technical documentation and event coordination.'
  }
];

const Roles = () => {
  return (
    <div className="roles">
      <h2>Roles and Responsibilities</h2>
      {roles.map((role, index) => (
        <div className="role-item" key={index}>
          <h3>{role.position}</h3>
          <p><strong>Club:</strong> {role.club}</p>
          <p><strong>Duration:</strong> {role.duration}</p>
          <p><strong>Major Events:</strong> {role.events}</p>
        </div>
      ))}
    </div>
  );
}

export default Roles;
