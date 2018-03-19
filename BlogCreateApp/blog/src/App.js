import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './Blog.js';
import PropTypes from "prop-types";


const App = (props) => {

  return (
      <div>   
         { props.value.map(el => <Blog value={el} key={el.id}/>) }

      </div>
  )
}

App.propTypes = {
  value: PropTypes.array.isRequired
}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
