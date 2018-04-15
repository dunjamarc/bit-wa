import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';

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
