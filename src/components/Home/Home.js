import React, { Component } from 'react';
// import { Container, Row, Col} from 'reactstrap';
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import About from "../About/About";
import Individual from "../Individual/Individual";
import Projects from "../Projects/Projects";
import Intro from '../Intro/Intro';



const li = require('../../images/linkedin-box.png');
const email = require('../../images/email-outline.png');
const git = require('../../images/github-circle.png');
const file = require('../../images/file-document.png');
const resume = require('../../images/trang_resume.pdf');







class Home extends Component {
    render() {
        return (
            <div>
                <main class="wrapper">
                    <section className="section parallax bg1">
                   
                        <header className="navhead">
                            <div className="container right-align">
                                <a href={resume}><img className="footicon" src={file} alt="Resume" target="_blank" className="headicon" /> </a>

                                <a href="mailto:ttrangdo3@gmail.com" target="_top" className="icon"><img className="headicon" src={email} /> </a>


                                <a href="https://www.linkedin.com/in/ttrangdo/" target="_blank" className="icon"><img className="headicon" src={li} /></a>


                                <a href="https://github.com/ttrangdo" target="_blank" className="icon"><img className="headicon" src={git} /></a>

                            </div>
                        </header>

                         <Intro />
                    </section>

                    <section className="section staticme">
                        <About />
                    </section>

                    <section class="section staticquote">
                        <Individual />
                    </section>

                    <section class="section parallax bg2">
                    </section>

                    <section class="section staticprojects">
                        <Projects />
                    </section>

                    <section class="section staticfooter">
                    <div className="container center-align">

                        <a href={resume}><img className="footicon" src={file} alt="Resume" target="_blank" className="icon" /> </a>

                        <a href="mailto:ttrangdo3@gmail.com" target="_top" className="icon"><img className="footicon" src={email} /> </a>


                        <a href="https://www.linkedin.com/in/ttrangdo/" target="_blank" className="icon"><img className="footicon" src={li} /></a>


                        <a href="https://github.com/ttrangdo" target="_blank" className="icon"><img className="footicon" src={git} /></a>


                        <p className="copyright"> © 2018 TRANG DO | ALL RIGHTS RESERVED </p>


                    </div>
       
                    </section>
                </main>
            </div>



        );
    };
};

export default Home;