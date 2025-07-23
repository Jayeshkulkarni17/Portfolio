import React from "react";
import "./techStack.css";

import html from "../images/vscode-icons_file-type-html.svg";
import css from "../images/vscode-icons_file-type-css.svg";
import js from "../images/vscode-icons_file-type-js-official.svg";
import ts from "../projectImg/typescript.png";
import react from "../images/react-dark.svg";
import redux from "../images/redux.png";
import nodejs from "../images/nodejs_logo.svg";
import express from "../images/expressjs-ar21.svg";
import mongodb from "../images/mongodb.svg";
import mysql from "../images/mysql-dark.svg";
import git from "../images/logos_git-icon.svg";
import firebase from "../images/firebase-dark.svg";
import nextjs from "../images/nextjs.svg";
import tailwind from "../projectImg/tailwind.png";
import mui from "../images/mui.png";
import bootstrap from "../images/logos_bootstrap.svg";
import Fade from "react-awesome-reveal";

const techStack = [
  { img: nextjs, name: "Next.js" },
  { img: react, name: "React" },
  { img: redux, name: "Redux" },
  { img: nodejs, name: "Node.js" },
  { img: express, name: "Express.js" },
  { img: mongodb, name: "MongoDB" },
  { img: mysql, name: "MySQL" },
  { img: firebase, name: "Firebase" },
  { img: ts, name: "TypeScript" },
  { img: js, name: "JavaScript" },
  { img: html, name: "HTML5" },
  { img: css, name: "CSS3" },
  { img: tailwind, name: "Tailwind CSS" },
  { img: mui, name: "MUI" },
  { img: bootstrap, name: "Bootstrap" },
  { img: git, name: "Git" },
];

const TechStack = () => {
  return (
    <>
      <Fade bottom>
        <div id="techStack">
          <div>
            <h1 className="techStack-title">Tech Stack</h1>
            <p className="centre">
              Technologies I've been working with recently
            </p>
            <div className="stackflex stackflex1">
              {techStack.map((tech, idx) => (
                <span className="stackStyle" key={tech.name}>
                  <img src={tech.img} alt={tech.name} className="stack" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Fade>
      <hr />
    </>
  );
};
export default TechStack;
