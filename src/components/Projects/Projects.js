import React, {Component} from 'react';
import "./Projects.css";
import { Carousel } from 'react-bootstrap';

const smallgit = require('../../images/smallgit.png');

const lol = require('../../images/lolg2g.png');
const lot = require('../../images/lotspot.png');
const poke = require('../../images/pokemon.png');
const on = require('../../images/ontap.png');




class Projects extends Component {
    render() {
        return (
        <div>
             <center>
 <div className="container">

<div className="row">
    <div className="col s12">
        <h5 className="projects"> FEATURED PROJECTS </h5>
    </div>
</div>
</div>


<container carousel>

<Carousel>
    <Carousel.Item>

         <a href="https://ttrangdo.github.io/lotspotFinal/" target="_blank" ><img src={lot} /> </a>
        <Carousel.Caption>
            <h3></h3>
            <p className="carouselcap"> lotspot is a parking application that locates nearby parking garages in downtown Austin based on user destination. (front-end project)<a href="https://github.com/ttrangdo/lotspotFinal" target="_blank" className="icon"><img src={smallgit} /></a></p>

        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://lolg2g.herokuapp.com/" target="_blank"> <img src={lol} /> </a>
        <Carousel.Caption>
            <p className="carouselcap">LOLG2G, or League of Legends Game2Gether, is a LoL team builder website that matches players based on gaming-style preferences. (full-stack project)<a href="https://github.com/ttrangdo/G2G" target="_blank" className="icon"><img src={smallgit} /></a></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://ttrangdo.github.io/Hangman-Game/" target="_blank" ><img src={poke} /> </a>
        <Carousel.Caption>
            <p className="carouselcap"> Pokemon Hangman is a simple hangman game powered by JavaScript. (front-end project)<a href="https://github.com/ttrangdo/Hangman-Game" target="_blank" className="icon"><img src={smallgit} /></a></p>
        </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item>
    <a href="https://ontapp.herokuapp.com/" target="_blank"><img src={on} /> </a>
        <Carousel.Caption>
            <p className="carouselcap">On Tap is a web application drinking-entertainment game comprised of a custom drinking game, game guides, music playlists, and recommended snacks/drunchies. (full-stack project)<a href="https://github.com/ttrangdo/On-Tap" target="_blank" className="icon"><img src={smallgit} /></a></p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
</container>
</center>
           
        </div>

        );
    };
};

export default Projects;