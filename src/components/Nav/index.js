import React from 'react';
import { withRouter } from 'react-router-dom';

import './index.css';



class Nav extends React.Component {

    handleGoAbout = event => {
        event.preventDefault()
        this.props.history.push('/about')
    }

    handleGoContact = event => {
        event.preventDefault()
        this.props.history.push('/contact')
    }

    render() {

        return (
            <div className="hoverzone">
                <p>
                    <ul class="menu">
                        <li onClick={this.handleGoAbout}> About </li>
                        <li onClick={this.handleGoContact}> Contact </li>
                        <a target="blank" href="https://github.com/CRR257">  <i class="fab fa-github"></i></a>
                        <a target="blank" href="https://www.linkedin.com/in/clara-ruf%C3%AD-rull-ab16832b/">  <i class="fab fa-linkedin-in"></i></a>
                    </ul>
                </p>
            </div>
        )
    }
}
export default withRouter(Nav);