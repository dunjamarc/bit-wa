import React from 'react';
import './header.css';

const Header = (props) => {
 
    return (
        <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">Bit Persons</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#" onClick={props.handleClick}><i className="material-icons">{props.showCard ? 'view_list' : 'view_module'}</i></a></li>
            <li><a href="#" onClick={props.handleRefresh}><i className="material-icons" >refresh</i></a></li>
          </ul>
        </div>
        </nav>
    )
}

export default Header;