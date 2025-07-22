import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 170);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`navbar ${!isTop ? "scrolled" : ""}`}>
        <div className="logo">
          <h1 className={`heading ${!isTop ? "animate-title" : ""}`}>
            {isTop ? "Portfolio" : "Jayesh Kulkarni"}
          </h1>
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about-me">About</a>
          <a href="#techStack">Tech Stack</a>
          <a href="#myprojects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/Jayeshkulkarni17">
            <AiFillGithub size="1.5em" />
          </a>
          <a href="https://x.com/Jayaaa_1703">
            <AiFillTwitterSquare size="1.5em" />
          </a>
          <a href="https://www.linkedin.com/in/jayesh-kulkarni-16b6711b0/">
            <AiFillLinkedin size="1.5em" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
