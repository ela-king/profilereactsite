import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import MainContent from '../Components/MainContent';
import About from '../Components/About';
import { Row, Col } from 'react-bootstrap';

// document.addEventListener("mouseup", (e) => {
//     if(!e.target.classList.contains("menu-toggle-button")) {
//         document.querySelector(".menu-toggle-button").classList.remove("active");
//     }
// });

class MainLayout extends Component {

    menuToggle(e) {
        !e.currentTarget.classList.contains("active") ? e.currentTarget.classList.add("active") : e.currentTarget.classList.remove("active");
    }

    render() {
        return (
            <div className="main-container">
                <Router>
                    <button className="menu-toggle-button" onClick={this.menuToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="links-container">
                        <Row className="text-center">
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Link to="/" className="link">Home</Link>
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Link to="/about" className="link">About</Link>
                            </Col>
                        </Row>
                        
                    </div>
                    <div className="main-wrapper">
                        <Switch>
                            <Route exact path="/">
                                <MainContent />
                            </Route>
                            <Route path="/about"><About /></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default MainLayout;