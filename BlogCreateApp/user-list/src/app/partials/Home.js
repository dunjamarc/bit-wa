import React, { Component } from 'react';
import LoadingScreen from './LoadingScreen.js';
import SearchBar from './SearchBar.js';
import Card from '../users/UserCard.js';
import List from '../users/UserList.js';
import '../../css/App.css';
import userList from '../../services/UserService.js';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './Header.js';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {users: [],
        showCard:  JSON.parse(localStorage.getItem('showCard')) || false,
        inputValue: '',
        search: [],
        load: true
        }
      }
    
      componentDidMount(){  // after render / Starting API calls to load in data for your component
        userList.fetchUsers()
          .then(usersData => {
            
            this.setState({
              users: usersData,
              search: usersData,
              load: false
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
              search: usersData
            })
          })
      }
    
      handleChange = (event) => {
        this.setState({
          search: this.state.users.filter( el => {
              return (el.name.toLowerCase().search(event.target.value.toLowerCase()) != -1);
          }),
          inputValue: event.target.value
        });
      }

    render () { 
        return (
            <React.Fragment>
            <Header handleClick={this.handleClick} handleRefresh={this.handleRefresh} showCard={this.state.showCard}/>
            {this.state.load ? <LoadingScreen /> : 
            <main>
            <SearchBar handleChange={this.handleChange} inputValue={this.state.inputValue}/>
            <div className="row">
                <div className="col s12 m12">
                    {this.state.search.map( (el, i) => {
                    return (this.state.showCard ? <Card value={el} key={i}/> : <List value={el} key={i}/>)})}   
                </div>
            </div>
            </main>}
            </React.Fragment>
        )}
}

export default Home;