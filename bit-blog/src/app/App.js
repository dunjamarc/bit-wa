import React, { Component } from 'react';
import '../App.css';
import { Switch, Route } from "react-router-dom";
import Home from './home_page/Home.js';
import About from './About.js';
import AllAuthors from './all_authors_page/AllAuthors.js';
import Author from './author_page/Author.js';
import Post from './Post.js';
import Header from './partials/Header.js';
import Footer from './partials/Footer.js';
import NewPost from './NewPost.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/authors' component={AllAuthors} />
          <Route exact path='/posts/new' component={NewPost} />
          <Route path='/authors/:id' component={Author} />
          <Route path='/posts/:postId' component={Post} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
