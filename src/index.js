import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routes from './routes';
import './style.css';

function App() {
    return (
        <Router>
            <h1>Navbar would go here.</h1>
            <Switch>
                {routes.map(({ path, component }) => (
                    <Route path={path} component={component} />
                ))}
            </Switch>
        </Router>
    )
}

render(<App />, document.getElementById("root"));