import React from 'react';
import ListItemPost from './ListItemPost.js';

const Home = (props) => {
    return (
        <div className="container">
            <h3>POSTS</h3>
            <ListItemPost />
            <ListItemPost />
            <ListItemPost />
            <ListItemPost />
            <ListItemPost />
            <ListItemPost />
            <ListItemPost />
            <ListItemPost />
        </div>
    )
}

export default Home;