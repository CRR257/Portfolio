import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './index.css';

class Nav extends React.Component {

  render() {
    return (
      <header className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about/#about'>About</Link></li>
          <li><Link to='/contact/#contact'>Contact</Link></li>
          <div className="nav-icon">
            <a target="_blank" href="https://github.com/CRR257"><i className="fab fa-github"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/clara-ruf%C3%AD-rull-ab16832b/"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </ul>
      </header>
    )
  }
}
export default withRouter(Nav);