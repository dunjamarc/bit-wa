import React from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import NameInfo from './NameInfo.js';
import AddressInfo from './AddressInfo.js';
import CompanyInfo from './CompanyInfo.js';

const Author = (props) => {
    return (
        <div className="container">
        <Link to='/authors'>back</Link>
            <NameInfo />
            <AddressInfo />
            <CompanyInfo />
        </div>
    )
}

export default Author;