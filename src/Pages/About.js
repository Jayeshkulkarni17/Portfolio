import React from "react";
import "./About.css";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Typewriter from "typewriter-effect";
const About = () => {
  return (
    <>
      <div id="about-me">
        <div className="about">
          <div className="desc">
            <h1 className="aboutMe-title">About Me</h1>
            <p>
              I'm Jayesh Kulkarni, a developer passionate about bringing ideas
              to life through code. My toolkit is centered around
              JavaScript/TypeScript, with a deep proficiency in Next.js,
              React/React Native, and Node.js for creating intuitive front-ends
              and robust back-ends. I enjoy the full scope of a project, from
              designing a user interface with CSS/Tailwind to deploying a
              scalable application on AWS. I'm driven by the challenge of
              building beautiful, functional applications that people love to
              use.
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  skipAddStyles: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Looking opportunities for Software Developer Role."
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
              />
            </p>
            <h1 className="Edu-title">Education</h1>
            <p className="margin-top">
              Bachelors of Engineering (Information Technology)
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <HiOutlineBuildingLibrary />
              <span className="clg">&nbsp;8.65 CGPA</span>
            </div>
            <p className="clg">
              Marathwada Mitra Mandal's College of Engineering, Pune
            </p>
            <p className="margin-top">Polytechnic</p>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <HiOutlineBuildingLibrary />
              <span className="clg">&nbsp;93.49%</span>
            </div>
            <p className="clg">
              SSVPS’s Bapusaheb Shivajirao Deore Polytechnic
            </p>
          </div>
        </div>
      </div>

      <hr />
      <br />
      <br />
      <br />
    </>
  );
};
export default About;
