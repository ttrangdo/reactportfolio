import React, { Component } from 'react';
import "./Intro.css";
const li = require('../../images/linkedin-box.png');
const email = require('../../images/email-outline.png');
const git = require('../../images/github-circle.png');
// const smallgit = require('../../images/smallgit.png');
const file = require('../../images/file-document.png');
const resume = require('../../images/trang_resume.pdf');




class Intro extends Component {
    render() {
        return (
            <div>
                        <div className="container">
                            <div className="row">

                                <div className="col s12 grey-text">

                                    <h2 className="trang">TRANG DO</h2>
                                    <h4 className="front">FRONT-END WEB DEVELOPER</h4>
                                    <p className="light center-align">
                                        welcome to my creative space.
                                    </p>
                                </div>
                            </div>
                        </div>
            </div>
        );
    };
};

export default Intro;