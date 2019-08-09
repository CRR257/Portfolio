
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from  'react-router-dom'

import HomePage from './Homepage';

const Routes = () => {
    return (
        <Router>
            <Fragment>
                <Route exact path="/" component={HomePage} />
            </Fragment>
        </Router>
    )
}

export default Routes
