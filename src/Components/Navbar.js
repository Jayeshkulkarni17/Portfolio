import React from "react";
import './Navbar.css'
import {AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare} from 'react-icons/ai'
// import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
// import HR from '../projectImg/hr.png'
import { AiFillInstagram } from "react-icons/ai";


const Navbar = ()=>{
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <h1 className='heading'>Jayesh Kulkarni</h1>
                </div>
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#about-me">About</a>
                    <a href="#techStack">Tech Stack</a>
                    <a href="#myprojects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="https://github.com/Jayeshkulkarni17"><AiFillGithub size='1.5em' /></a>
                    <a href="https://x.com/Jayaaa_1703"><AiFillTwitterSquare size='1.5em' /></a>
                    {/* <a href="#"><HR size='1.5em' /></a> */}

                    <a href="https://www.linkedin.com/in/jayesh-kulkarni-16b6711b0/"> <AiFillLinkedin size='1.5em' /></a>
                </div>
            </div>
        </>
    )
}

export default Navbar;