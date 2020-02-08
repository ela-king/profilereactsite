import React, { Component } from 'react';

function MainContent() {
    return (
        <div className="profile-view">
            <div className="image-cont">
                <img className="profile-img" alt="" src="../assets/img/profile.jpg" />
            </div>
            <div className="profile-cont">
                <span className="profile-name">Elavarasan S</span>
                <span className="profile-desig">Full Stack Developer</span>
                <span className="profile-selfnote">I am a soft guy.</span>
            </div>
        </div>
    )
}

export default MainContent;