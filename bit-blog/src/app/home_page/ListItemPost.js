import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Home from './Home.js'

const ListItemPost = (props) => {
    return (
        <li className='list-item'>
            <h3><Link to={`/posts/${props.value.postId}`}>{props.value.title}</Link></h3>
            <p>{props.value.body}</p>
        </li>
    )
}

export default ListItemPost;