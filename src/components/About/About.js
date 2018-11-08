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
            <Navbar />
            <Jumbotron>
            <div class="container">
            </div>
            </Jumbotron> 
            <div className= "meSection">
                <Row>
                    <Col> 
                    <center>
                    Trang is a design-oriented front-end web developer based in Austin, Texas. She is a recent graduate from the University of Texas at Austin (hook em, baby) with a B.A. in International Relations and Global Studies and minor in Asian Studies. 
                    <br />
                    Web design serves as a creative outlet for my artistic passions and feeds my aim to create aesthetically pleasing user experiences.
                    </center>
                    </Col>
                </Row>
                </div>
        </div>

        );
    };
};

export default About;