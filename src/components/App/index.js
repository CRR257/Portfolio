
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from  'react-router-dom'

import HomePage from '../Homepage/index';
import About from '../About/index';

const App = () => {
    return (
        <Router>
            <Fragment>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={About} />
            </Fragment>
        </Router>
    )
}

export default App
