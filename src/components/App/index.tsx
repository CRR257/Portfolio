import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
import HomePage from 'pages/Homepage';
import About from 'components/About';
import Projects from 'components/Carousel';
import Contact from 'components/Contact';


function App() {

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
}

export default App;
