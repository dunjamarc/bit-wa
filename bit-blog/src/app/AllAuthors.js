import React from 'react';
import ListItemAuthor from './author_page/ListItemAuthor.js';

const AllAuthors = (props) => {
    return (
        <div className="container">
            <h4>AUTHORS(6)</h4>
            <ListItemAuthor />
            <ListItemAuthor />
            <ListItemAuthor />
            <ListItemAuthor />
            <ListItemAuthor />
            <ListItemAuthor />
        </div>
    )
}

export default AllAuthors;