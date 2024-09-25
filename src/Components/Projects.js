import React from "react";
import './Projects.css';
import Project from './project/Project';
import { motion } from 'framer-motion';

export const Portfolio = require('../projectImg/pf.png');

const projectObj = [
    {
        img: Portfolio,
        heading: 'Portfolio',
        desc: 'Built using React.js, showcasing my skills and projects. Active contact form for easy communication.',
        link: '#',
        githubLink: 'https://github.com/Jayeshkulkarni17/Portfolio',
    },
];

const ProjectPage = () => {
    return (
        <>
            <div id='projects'>
                <div className='myprojects'>
                    {projectObj.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Project
                                img={project.img}
                                heading={project.heading}
                                desc={project.desc}
                                githubLink={project.githubLink}
                                // link={project.link}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectPage;
