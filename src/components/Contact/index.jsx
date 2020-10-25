import React from "react";
import gif from "../../img/general/catdev.gif";
import "./index.scss";

const contact = () => {
  return (
    <div className="contact" id={"contact"}>
      <div className="contact-container">
        <p className="contact-title">Contact</p>
        <div className="contact-content">
          <div>
            <span>clara.rufi.rull@gmail.com</span>
            <br />
            <span>Barcelona</span>
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
      <div className="contact-gif">
      <img src={gif} alt="cat-typing" className="gif--size"/>
      </div>
    </div>
  );
};

export default contact;
