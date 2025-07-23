import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <hr />
      <div id="contact">
        <h1 className="contact-title">Contact Details</h1>
        <div className="text-wrapper">
          <a href="mailto:jayKulkarni17ab@gmail.com" className="email-link">
            jayKulkarni17ab@gmail.com
          </a>
        </div>
        <br />
        <div class="text-wrapper">
          <span class="gradient-text">+91 9021029598</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
