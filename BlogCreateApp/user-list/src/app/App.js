import React, { Component } from 'react';
import '../css/App.css';
import './partials/header.css';
import Header from './partials/Header.js';
import Grid from './users/UserGrid.js';
import Footer from './partials/Footer.js';
import userList from '../services/UserService.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {users: []};
  }

  componentDidMount(){  // after render / Starting API calls to load in data for your component
    userList.fetchUsers()
      .then(usersData => {
        console.log(usersData);
        
        this.setState({
          users: usersData 
        })
      })
  }

  handleClick() {
    
  }

  render() {
    return (
      <React.Fragment>
        <Header handleClick={this.handleClick}/>
        <Grid value={this.state.users} />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
