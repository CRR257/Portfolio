import React from 'react';
import './index.scss';

export default function Nav() {

  return (
    <header className="header">
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <li><a href="/#">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
        <div className="nav-icon">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/CRR257"><i className="fab fa-github"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/clara-ruf%C3%AD-rull-ab16832b/"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </ul>
    </header>
  )
}