import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MainContent from '../Components/MainContent';
import About from '../Components/About';
import { Swipeable } from 'react-swipeable'

const RIGHT = "-1";
const LEFT = "+1";

const SwipeComponent = {
    "0": "/",
    "1": "about"
};

// document.addEventListener("mouseup", (e) => {
//     if(!e.target.classList.contains("menu-toggle-button")) {
//         document.querySelector(".menu-toggle-button").classList.remove("active");
//     }
// });

class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            componentIdx: 0
        };
        this.menuToggle = this.menuToggle.bind(this);
    }

    menuToggle(e, idx) {
        const menuButton = document.getElementsByClassName('menu-toggle-button')[0];
        const menuBar = document.getElementById("menuBar");
        menuBar.classList.contains("links-container") ? menuBar.classList.remove("links-container") : menuBar.classList.add("links-container");
        menuButton.classList.contains("active") ? menuButton.classList.remove("active") : menuButton.classList.add("active");
        this.setState({isMenuOpen: !this.state.isMenuOpen});
        if(idx) {
            this.setState({componentIdx: Number(idx)});
        }
    }

    onSwiped(direction) {
        const change = direction === RIGHT ? RIGHT : LEFT;
        const adjustedIdx = this.state.componentIdx + Number(change);
        console.log(adjustedIdx);
        if(adjustedIdx >= 0 && Object.keys(SwipeComponent).length+1 >= adjustedIdx) {
            this.setState({ componentIdx: adjustedIdx });
            window.location.href = SwipeComponent[this.state.componentIdx];
        }
        console.log("component idx: " + this.state.componentIdx);
    }

    render() {
        const { isMenuOpen } = this.state;
        return (
            <div className="main-container">
                <Router>
                    <button className="menu-toggle-button" onClick={(event) => this.menuToggle(event)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div id="menuBar">
                        {isMenuOpen &&
                        <div>
                            <Link to="/" onClick={(event) => this.menuToggle(event, "0")} className="link">Home</Link>
                            <Link to="/about" onClick={(event) => this.menuToggle(event, "1")} className="link">About</Link>
                        </div>
                        }
                    </div>
                    <Swipeable
                        trackMouse
                        preventDefaultTouchmoveEvent
                        onSwipedLeft={() => this.onSwiped(LEFT)}
                        onSwipedRight={() => this.onSwiped(RIGHT)}
                        // className="main-wrapper"
                        style={{ height: "100%" }}
                        >
                        <div className="main-wrapper">
                            <Switch>
                                <Route exact path="/">
                                    <MainContent />
                                </Route>
                                <Route path="/about"><About /></Route>
                            </Switch>
                        </div>
                    </Swipeable>
                </Router>
            </div>
        );
    }
}

export default MainLayout;