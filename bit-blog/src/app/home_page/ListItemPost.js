import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

const ListItemPost = (props) => {
    return (
        <li className='list-item'>
            <h3><Link to='/posts/:name'>title one</Link></h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
        </li>
    )
}

export default ListItemPost;