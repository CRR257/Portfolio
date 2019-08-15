import React from "react";
import Nav from "../Nav/index";
import Typer from "../Typer/index";
import About from "../About/index";
import Contact from "../Contact/index";


class HomePage extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Nav />
        <Typer />
        <About />
        <Contact />
      </div>
    );
  }
}

export default HomePage;
