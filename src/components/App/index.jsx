import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../Homepage/index';
import About from '../About/index';
import Projects from '../Projects/index';
import Contact from '../Contact/index';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'

const App = () => {

  const tagManagerArgs = {
    gtmId: 'GTM-5HJ3K9T'
  }

  TagManager.initialize(tagManagerArgs)

   useEffect(() => {
    ReactGA.initialize('G-QDPNN9PJ8S', {debug: true})
    ReactGA.pageview(window.location.pathname + window.location.search)
   }, [])


  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route path="/#about" component={About} />
        <Route path="/#projects" component={Projects} />
        <Route path="/#contact" component={Contact} />
      </Fragment>
    </Router>
  );
};

export default App;
