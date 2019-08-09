
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from  'react-router-dom'

import HomePage from './Homepage';
import Main from './Main';

const App = () => {
    return (
        <Router>
            <Fragment>
                <Route exact path="/" component={HomePage} />
                <Route path="/main" component={Main} />
            </Fragment>
        </Router>
    )
}

export default App
