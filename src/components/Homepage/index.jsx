import React from "react";
import Nav from "../Nav/index";
import Typer from "../Typer/index";
import About from "../About/index";
import Projects from "../Projects/index";
import Contact from "../Contact/index";
import Footer from "../Footer/index";

const homePage = () => {
  return (
    <div>
      <Nav />
      <Typer />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default homePage;
