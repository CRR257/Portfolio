import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../Homepage/index";
import About from "../About/index";
import Projects from "../Projects/index";
import Contact from "../Contact/index";

const app = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Fragment>
    </Router>
  );
};

export default app;
