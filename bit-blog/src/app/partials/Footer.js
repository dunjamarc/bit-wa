import React from 'react';
import '../../App.css';
import { Switch, Route, Redirect, Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-copyright">
            <div className="container">
                Copyright &copy; BIT March 2018
            </div>
        </div>

    )
}

export default Footer;