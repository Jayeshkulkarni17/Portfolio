import React from "react";
import './About.css';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import Typewriter from 'typewriter-effect';
const About = () => {
    return (
        <>
            <div id='about-me'>
                <div className='about'>
                    <div className='desc'>
                        <h1 className='bold'>About Me</h1>
                        <p>
                        I am Jayesh Kulkarni, a tech enthusiast with a passion for both web and app development. Proficient in modern frameworks like React, React Native, and Node.js, I specialize in JavaScript, TypeScript, Java, HTML, CSS, and Tailwind CSS. My backend expertise includes working with Firebase, Express.js, and managing databases using MongoDB. With certifications in AWS Cloud Foundations and AWS Cloud Architecture, I bring a strong foundation in cloud computing to my development projects. I focus on creating highly responsive, user-friendly interfaces while staying up-to-date with the latest trends in web and app development.
                            <Typewriter
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            'Looking opportunities for Software Development Engineer.'
                                        )
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .start();
                                }}
                            />
                        </p>
                        <h1 className='bold '>Education</h1>
                        <p className='margin-top'>
                            Bachelors of Engineering (Information Technology)
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                            }}
                        >
                            <HiOutlineBuildingLibrary />
                            <span className='clg'>8.65 CGPA</span>
                        </div>
                        <p className='clg'>
                            {/* <Typewriter
                                options={{
                                    // loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(1000)
                                        .typeString("JSPM's BSIOTR, Pune 2024")
                                        .start();
                                }}
                            /> */}
                            MMCOE, Pune 2024
                        </p>
                        <hr />
                        <p className='margin-top'>
                            {/* <Typewriter
                                options={{
                                    // loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('12th Science')
                                        .start();
                                }}
                            /> */}
                           Polytechnic 
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                            }}
                        >
                            <HiOutlineBuildingLibrary />
                            <span className='clg'>93.49%</span>
                        </div>
                        <p className='clg'>
                            {/* <Typewriter
                                options={{
                                    // loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            'Balbhim College, Beed 2020'
                                        )
                                        .start();
                                }}
                            /> */}
                           SSVPS’s Bapusaheb Shivajirao Deore Polytechnic 
                        </p>
                        <hr />
                    </div>
                </div>
                
            </div>
            
      <hr />
      <br /><br /><br />
         
        </>
    );
};
export default About;
