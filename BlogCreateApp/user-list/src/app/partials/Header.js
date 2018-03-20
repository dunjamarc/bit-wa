import React from 'react';
import './header.css';

const Header = (props) => {
 
    return (
        <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">Bit Persons</a>
          <ul className="right hide-on-med-and-down">
            <li className="show"><a href="#"><i className="material-icons">view_module</i></a></li>
            <li><a href="#"><i className="material-icons">view_list</i></a></li>
            <li><a href="#"><i className="material-icons" >refresh</i></a></li>
          </ul>
        </div>
        </nav>
    )
}

export default Header;