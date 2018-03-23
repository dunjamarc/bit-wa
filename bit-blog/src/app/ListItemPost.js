import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

const ListItemPost = (props) => {
    return (
        <li className='list-item'>
            <h3><Link to='/posts/:name'>title one</Link></h3>
            <p>Content</p>
        </li>
    )
}

export default ListItemPost;