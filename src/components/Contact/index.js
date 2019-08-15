import React from 'react';
import Nav from '../Nav/index';
import "./index.css";

class Contact extends React.Component {

    render() {
      return (
        <div className="contact" id={'contact'}>
        <Nav/>
        <h1>Contact</h1>
        <div className="content">
          <div>
          <span>Mail: exit257@gmail.com</span>
          <br />
          <span>City: Barcelona</span>
          <br />
          <span>
          <br />
            <a target="blank" href="https://github.com/CRR257"><i className="fab fa-github"></i></a>
            <a target="blank" href="https://www.linkedin.com/in/clara-ruf%C3%AD-rull-ab16832b/"><i className="fab fa-linkedin-in"></i></a>
          </span>
          </div>
        </div>
      </div>
      )
    }
}

export default Contact;