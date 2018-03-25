import React from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom";

const NameInfo = (props) => {
    return (
        <div className="info-box">
        <img src="https://itechway.net/wp-content/uploads/2017/09/geek-boys-whatsapp-dp-1.jpg"/>
        <div className='author-info'>
            <h4>{props.value.name}</h4>
            <p>username: {props.value.username}</p>
            <p>email: {props.value.email}</p>
            <p>phone: {props.value.phone}</p>
        </div>
        </div>
    )
}

export default NameInfo;