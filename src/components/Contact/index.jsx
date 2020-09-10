import React from "react";
import Nav from "../Nav/index";
import "./index.scss";

const contact = () => {
  return (
    <div className="contact" id={"contact"}>
      <Nav />
      <p className="contact-title">Contact</p>
      <div className="contact-content">
        <div>
          <span>Mail: exit257@gmail.com</span>
          <br />
          <span>City: Barcelona</span>
          <br />
          <span className="contact-icons">
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/CRR257"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/clara-ruf%C3%AD-rull-ab16832b/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default contact;
