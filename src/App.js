import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Photography from './components/Photography/Photography';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
             <Route exact path="/" component={Home} /> 
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} /> 
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/photography" component={Photography} />
                        
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          > */}
           
          {/* </a> */}

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
