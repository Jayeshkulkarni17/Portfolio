import React from "react";
import "../Pages/home.css";
import "./Footer.css";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
// import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="footer">
        <div className="footer-social-pc">
          <a className="social" href="https://github.com/Jayeshkulkarni17">
            <AiFillGithub size="1.2em" />
          </a>
          <a className="social" href="https://x.com/Jayaaa_1703">
            <AiFillTwitterSquare size="1.2em" />
          </a>
          <a
            className="social"
            href="https://www.linkedin.com/in/jayesh-kulkarni-16b6711b0/"
          >
            {" "}
            <AiFillLinkedin size="1.2em" />
          </a>
        </div>
        <hr />
        <div className="footer-links">
          <div className="link-sec">
            <a href="#home">Home</a>
            <a href="#about-me">About</a>
            <a href="#techStack">Tech Stack</a>
            <a href="#myprojects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <p>
            {" "}
            made with ❤️‍🔥 by <span className="footer-name">Jayesh Kulkarni</span>
          </p>
          <div className="footer-social-mobile">
            <a className="social" href="https://github.com/Jayeshkulkarni17">
              <AiFillGithub size="1.2em" />
            </a>
            <a className="social" href="https://x.com/Jayaaa_1703">
              <AiFillTwitterSquare size="1.2em" />
            </a>
            <a
              className="social"
              href="https://www.linkedin.com/in/jayesh-kulkarni-16b6711b0/"
            >
              {" "}
              <AiFillLinkedin size="1.2em" />
            </a>
          </div>
        </div>
      </div>
      {/* Floating Theme Toggle Button */}
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label="Toggle dark/light mode"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </>
  );
};
export default Footer;
