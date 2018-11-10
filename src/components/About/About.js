import React, {Component} from 'react';
import { Container, Row, Col} from 'reactstrap';
import Navbar from "../Navbar/Navbar";
import "./About.css";
import oc from "../../images/oculus.jpg"
import Jumbotron from "../Jumbotron/Jumbotron";


const oculus = require('../../images/oculus.jpg');




class About extends Component {
    render() {
        return (
        <div>
         <div className="container">
                    <div className="row">
                        <div className="col m4 s12">
                            <div className="icon-block">
                                <h2 className="center light-blue-text">
                                    <i className="medium material-icons">person_pin</i>
                                </h2>
                                <h5 className="center">a little about me</h5>
                                <p className="light">
                                    My name is Trang Do and I am a front-end web developer born, raised, and enjoying life in Austin, Texas. I graduated from the University at Austin (<span className="hook">hook 'em \m/</span>) with a B.A. in International Relations and Global Studies and a certification in full-stack web development. This past year, I've decided to follow my passion in web and UI design. <span className="happy">Creating beautiful and engaging user interfaces makes me happy, and I want to share my designs with others. </span>
         </p>
                            </div>

                        </div>
                        <div className="col m4 s12">
                            <div className="icon-block">
                                <h2 className="center light-blue-text">
                                    <i className="medium material-icons">laptop_mac</i>
                                </h2>
                                <h5 className="center">a look inside my head</h5>
                                <p className="light">

                                    I'm an artist. I love to draw, paint, and do photography. I was drawn to web design because it was another <span className="outlet"> creative outlet </span>; the UI for websites and apps serve as <i>dynamic and exciting</i> canvases that hold integral roles in today's society, and I too would like to contribute to those canvases. I enjoy mixing and matching fonts, colors, and graphics and won't stop until the designs in my head are brought to life. <span className="inspired">I'm constantly inspired by new ideas that I am determined to make functional. </span> 

         </p>
                            </div>
                        </div>
                        <div className="col m4 s12">
                            <div className="icon-block">
                                <h2 className="center light-blue-text">
                                    <i className="medium material-icons">loyalty</i>
                                </h2>
                                <h5 className="center">things i enjoy</h5>
                                <p className="light">
                                    When I'm not creating content, I play league of legends. I binge watch tv shows and binge read good books. I also enjoy hiking and spend time by the waterfront. I love to travel to new places and making videos of my trips. Oh, and eating. <span className= "eating">
                                    I thorougly enjoy eating </span>and finding new places to eat and happy hour at.
            </p>
                            </div>
                        </div>
                    </div>
                </div>



                
        </div>

        );
    };
};

export default About;