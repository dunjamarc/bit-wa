import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <a className="brand-logo">RND BLG</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/home'>Home</Link></li>
                    <li id='authors'><Link to='/authors'>Authors</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;