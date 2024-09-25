import React from 'react';
// import './experience.css';
import '../Pages/experiance.css'

const Experience = () => {
  const experiences = [
    {
      company: 'BR Coder',
      role: 'React Native Developer Intern',
      duration: 'Aug 2024 - Present',
      description: 'Implement frontend and backend Application development tasks, mastering React Native,FireBase,TypeScript,JavaScript, HTML and CSS.'
    },
    {
      company: 'Ray B2B',
      role: 'Web Developer Intern',
      duration: 'Jan 2024 - Mar 2024',
      description: 'Executed critical frontend and backend development tasks, mastering React, HTML, CSS, JavaScript with 100% proficiency and improved user engagement metrics by 30%'
    },
    
  ];

  return (
    <div className="experience">
      <h2 className="experience-heading">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3 className="experience-role">{exp.role}</h3>
          <h4 className="experience-company">{exp.company}</h4>
          <p className="experience-duration">{exp.duration}</p>
          <p className="experience-description">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
