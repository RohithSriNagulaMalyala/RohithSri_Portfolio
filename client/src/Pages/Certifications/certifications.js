import React from 'react';
import './certifications.css';

const certifications = [
  {
    title: 'The Joy of Computing using Python, NPTEL',
    description: 'A comprehensive course on Python programming.',
    date: 'July-October 2022',
    duration: '4 months',
    certificateLink: '#'
  },
  {
    title: 'Web development Course, Internshala',
    description: 'A complete guide to web development.',
    date: 'October-December 2022',
    duration: '3 months',
    certificateLink: '#'
  },
  {
    title: 'Data Analytics with Python, NPTEL',
    description: 'Data analytics and visualization techniques using Python.',
    date: 'January-April 2023',
    duration: '4 months',
    certificateLink: '#'
  }
];

const Certifications = () => {
  return (
    <div className="certifications">
      <h2>Certifications</h2>
      {certifications.map((cert, index) => (
        <div className="cert-item" key={index}>
          <h3>{cert.title}</h3>
          <p>{cert.description}</p>
          <p>Date: {cert.date}</p>
          <p>Duration: {cert.duration}</p>
          <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
      ))}
    </div>
  );
}

export default Certifications;
