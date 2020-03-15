// src/components/App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/style.css';

import Home from "../pages/Home";
import Contact from "../pages/Contact";
 
class App extends Component {
    render() {
      return (
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
             </ul>
            <div>
                <Route exact path='/' component={Home}/>
                <Route path='/contact' component={Contact}/>
            </div>
        </Router>
      )
    }
  }
  
  export default App
 