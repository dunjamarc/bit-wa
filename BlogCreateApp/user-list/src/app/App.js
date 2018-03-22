import React, { Component } from 'react';
import '../css/App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './partials/Home.js';
import About from './partials/About.js';

class App extends Component {
  

  render() {
    return (
      <React.Fragment>
        
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
        </Switch>
        
      </React.Fragment>
    );
  }
}

export default App;
