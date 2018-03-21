import React, { Component } from 'react';
import '../css/App.css';
import './partials/header.css';
import Header from './partials/Header.js';
import Card from './users/UserCard.js';
import List from './users/UserList.js';
import Footer from './partials/Footer.js';
import userList from '../services/UserService.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {users: [],
    showCard:  JSON.parse(localStorage.getItem('showCard')) || false};
  }

  componentDidMount(){  // after render / Starting API calls to load in data for your component
    userList.fetchUsers()
      .then(usersData => {
        
        this.setState({
          users: usersData
          
        })
      })
  }

  handleClick = (event) => {
    localStorage.setItem('showCard', JSON.stringify(!this.state.showCard));

    this.setState((prevState) => {
      return { showCard: !prevState.showCard }
    });
  }

  handleRefresh = (event) => {
    userList.fetchUsers()
      .then(usersData => {
        
        this.setState({
          users: usersData,
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <Header handleClick={this.handleClick} handleRefresh={this.handleRefresh} showCard={this.state.showCard}/>
        <div className="row">
            <div className="col s12 m12">
                {this.state.users.map( (el, i) => {
                return (this.state.showCard ? <Card value={el} key={i}/> : <List value={el} key={i}/>)
                  }
                )}
            </div>
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
