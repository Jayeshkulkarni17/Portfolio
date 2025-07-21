import React from "react";
import "../Pages/experiance.css";

const Experience = () => {
  const experiences = [
    {
      company: "Nikqik Technologies",
      role: "Associate Consultant",
      duration: "Oct 2024 - Present",
      description:
        "Developing a nikqik technology product. Tech stack: NextJS, AWS, MongoDB, JavaScript/TypeScript",
    },
    {
      company: "BR Coder",
      role: "React Native Developer Intern",
      duration: "July 2024 - Sep 2024",
      description:
        "Developed frontend and backend of mobile application, master ReactNative , FireBase, TypeScript, JavaScript, HTML and CSS.",
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
