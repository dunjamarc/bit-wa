import React from 'react';
import ListItemPost from './ListItemPost.js';
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div className="container">
            <h3>POSTS</h3>
            <Link to='/posts/new' className="waves-effect waves-light btn">Create New Post</Link>
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