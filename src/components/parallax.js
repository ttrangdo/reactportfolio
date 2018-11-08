import React, { Component } from 'react';
// import { Container, Row, Col} from 'reactstrap';
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import newyork from "../../images/bridge.jpg";
import pinker from "../../images/pink1.jpg";
import front from "../../images/cp2.jpg";
import carousel from "../Carousel";
import { Carousel } from 'react-bootstrap';

const cp1 = require('../../images/cp1.jpg')
const ny = require('../../images/bridge.jpg');
const li = require('../../images/linkedin-box.png');
const email = require('../../images/email-outline.png');
const git = require('../../images/github-circle.png');
const smallgit = require('../../images/smallgit.png');
const file = require('../../images/file-document.png');
const resume = require('../../images/trang_resume.pdf');


const lol = require('../../images/lolg2g.png');
const lot = require('../../images/lotspot.png');
const poke = require('../../images/pokemon.png');
const on = require('../../images/ontap.png');
const open = require('../../images/open-in-new.png');






class Home extends Component {
    render() {
        return (
            //  <div>
            //             <div class="parallax-container">
            //             <div class="parallax">
            //             <div> trang do</div>
            //             <img src="../images/bridge.jpg"></img>
            //             </div>
            //           </div>
            //           <div class="section white">
            //             <div class="row container">
            //               <h2 class="header">Parallax</h2>
            //               <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
            //             </div>
            //           </div>
            //           <div class="parallax-container">
            //             <div class="parallax">
            //             <img src={ny}></img>
            //             </div>
            //           </div>
            //           </div>

            <div>
                {/* <Navbar /> */}
                {/* <nav className="light">
  <div className="nav-wrapper container">
    <a href="#" class="brand-logo">TRANG DO</a>    
    <ul className="right hide-on-med-and-down">
      <li className="hoverable"><a href="#">Navbar Link</a></li>
    </ul>
  </div>
</nav> */}
            <center>
            <img src={cp1} />
            </center>
                <div className="parallax-container center valign-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 grey-text">
                            
                                <h2 className="trang">TRANG DO</h2>
                                <h4 className="front">FRONT-END WEB DEVELOPER</h4>
                                <p className="light center-align">
                                    welcome to my creative space.
        </p>
                                {/* <a class="waves-effect waves-light btn-large teal lighten-2">Get Started</a> */}
                            </div>
                        </div>
                    </div>

                    <div className="parallax">
                        <img src={cp1} />
                    </div>

                </div>


                <div className="container center-align">
                    <div className="section">
                        <div className="row">
                            <div className="col s12">
                                {/* <h4 className="hello">hello, I'm trang</h4>  */}


                            </div>
                        </div>
                    </div>
                </div>



                <div className="parallax-container center valign-wrapper">
                    <div className="parallax"><img src={ny}></img>
                    </div>

                    <div className="container white-text">
                        <div className="row">
                            <div className="col s12">
                                <h5>A modern responsive front-end framework based on Material Design</h5>
                            </div>
                        </div>
                    </div>
                </div>


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



                <div className="parallax-container center valign-wrapper">
                    <div className="parallax"><img src={ny} />
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <h5 className="self">I'm a self-motivated individual determined to accomplish everything with a positive attiude. </h5>
                            </div>
                        </div>
                    </div>
                </div>



                {/* carousel  */}
                <center>
                {/* <div className="card"> */}
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
                   
                   
               
                {/* </div> */}
                </center>

                {/* projects */}

                

                {/* <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <h5 className="self">  </h5>
                            </div>
                        </div>
                    </div>

                <div className="container project">
                    <div className="row">
                        <div className="col m4 s12">
                            <div className="icon-block">
                                <h2 className="center light-blue-text">
                                    <i className="small material-icons">drive_eta</i>
                                </h2>
                                <h5 className="center">lotspot</h5>
                                <p className="light">
                                    <div className="row">
                                        <div className="col m4 s12 ">
                                            <div className="card">
                                                <div className="card-image">
                                                    <a href="https://ttrangdo.github.io/lotspotFinal/" target="_blank" ><img src={lot} /> </a>
                                                    <a href="https://github.com/ttrangdo/lotspotFinal" className="btn-floating halfway-fab waves-effect waves-light grey" target="_blank"><img src={git}></img></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="cardcon"> lotspot is a parking application that locates nearby parking garages in downtown Austin based on user destination. (front-end project) </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>


                           <div className="col m4 s12 ">
                            <div className="icon-block">
                                <h2 className="center light-blue-text">
                                    <i className="small material-icons">mac_laptop</i>
                                </h2>
                                <h5 className="center">LOLG2G</h5>
                                <p className="light">
                                    <div className="row">
                                    <div className="col m4 s12 ">
                                            <div className="card">
                                                <div className="card-image">
                                                    <a href="https://lolg2g.herokuapp.com/" target="_blank"> <img src={lol} /> </a>
                                                    <a href="https://github.com/ttrangdo/G2G" className="btn-floating halfway-fab waves-effect waves-light grey" target="_blank"><img src={git}></img></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="cardcon"> LOLG2G, or League of Legends Game2Gether, is a LoL team builder website that matches players based on gaming-style preferences. (full-stack project)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
            
                        <div className="col m4 s12 ">
                            <div className="icon-block">
                                <h2 className="center light-blue-text">
                                    <i className="small material-icons">videogame_asset</i>
                                </h2>
                                <h5 className="center">POKEMON HANGMAN</h5>
                                <p className="light">
                                    <div className="row">
                                    <div className="col m4 s12 ">
                                            <div className="card">
                                                <div className="card-image">
                                                    <a href="https://ttrangdo.github.io/Hangman-Game/" target="_blank" ><img src={poke} /> </a>
                                                    <a href="https://github.com/ttrangdo/Hangman-Game" className="btn-floating halfway-fab waves-effect waves-light grey" target="_blank"><img src={git}></img></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="cardcon"> Pokemon Hangman is a simple hangman game powered by JavaScript. (front-end project) </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>

                                <div className="col m4 s12 ">
                                <div className="icon-block">
                                    <h2 className="center light-blue-text">
                                        <i className="small material-icons">local_drink</i>
                                    </h2>
                                    <h5 className="center">ON TAP</h5>
                                    <p className="light">
                                        <div className="row">
                                        <div className="col m4 s12 ">
                                                <div className="card">
                                                    <div className="card-image">
                                                    <a href="https://ontapp.herokuapp.com/" target="_blank" ><img src={on} /> </a>
                                                    <a href="https://github.com/ttrangdo/On-Taps" className="btn-floating halfway-fab waves-effect waves-light grey" target="_blank"><img src={git}></img></a>
                                                    </div>
                                                    <div className="card-content">
                                                        <p classname="cardcon"> On Tap is a web application drinking-entertainment game comprised of a custom drinking game, game guides, music playlists, and recommended drunchies. (full-stack project)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </p>
                                </div>
                            </div>
                        </div> */}

               
                {/* </div> */}
                {/* </div> */}











                {/* footer */}
                <footer className="page-footer">
                    <div className="container center-align">

                        <a href={resume}><img src={file} alt="Resume" target="_blank" className="icon" /> </a>

                        <a href="mailto:ttrangdo3@gmail.com" target="_top" className="icon"><img src={email} /> </a>
                        

                        <a href="https://www.linkedin.com/in/ttrangdo/" target="_blank" className="icon"><img src={li} /></a>


                        <a href="https://github.com/ttrangdo" target="_blank" className="icon"><img src={git} /></a>

                        
                        <p className="copyright"> © 2018 TRANG DO | ALL RIGHTS RESERVED </p>


                    </div>
                </footer>



            </div>




        );
    };
};

export default Home;