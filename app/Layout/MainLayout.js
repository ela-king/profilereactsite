import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import MainContent from '../Components/MainContent';
import About from '../Components/About';

class MainLayout extends Component {
    render() {
        return (
            <div className="main-container">
                <Router>
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/about">About</Link>
                    <hr />
                    <Switch>
                        <Route exact path="/">
                            <MainContent />
                        </Route>
                        <Route path="/about"><About /></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default MainLayout;