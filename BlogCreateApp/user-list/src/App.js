import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import usersData from './users.js';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header/>
        <Main value={usersData}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
