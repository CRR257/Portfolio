import React from "react";
import Nav from "../Nav/index";
import Typer from "../Typer/index";
import About from "../About/index";
import Contact from "../Contact/index";
import Footer from '../Footer/index';

const homePage = props => {

    return (
      <div>
        <Nav />
        <Typer />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }

export default homePage;
