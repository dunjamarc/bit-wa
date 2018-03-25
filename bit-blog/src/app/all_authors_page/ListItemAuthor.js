import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

const ListItemAuthor = (props) => {
    return (
        <li className='list-item'>
            <h5><Link to={`/authors/${props.value.id}`}>{props.value.name} ({props.value.posts.length} posts)</Link></h5>
        </li>
    )
}

export default ListItemAuthor;