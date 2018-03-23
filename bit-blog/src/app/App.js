import React, { Component } from 'react';
import '../App.css';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import AllAuthors from './AllAuthors.js';
import Author from './author_page/Author.js';
import Post from './Post.js';
import Header from './partials/Header.js';
import Footer from './partials/Footer.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/authors' component={AllAuthors} />
          <Route path='/authors/:name' component={Author} />
          <Route path='/posts/:name' component={Post} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
