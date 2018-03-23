import React from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom";

const NameInfo = (props) => {
    return (
        <div className="info-box">
        <img src="https://itechway.net/wp-content/uploads/2017/09/geek-boys-whatsapp-dp-1.jpg"/>
        <div className='author-info'>
            <h4>Name Surname</h4>
            <p>username:</p>
            <p>email:</p>
            <p>phone:</p>
        </div>
        </div>
    )
}

export default NameInfo;