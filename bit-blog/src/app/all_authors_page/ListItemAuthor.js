import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

const ListItemAuthor = (props) => {
    return (
        <li className='list-item'>
            <h5><Link to='/authors/:name'>Name Surname (2 posts)</Link></h5>
        </li>
    )
}

export default ListItemAuthor;