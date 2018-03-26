import React from 'react';
import ListItemPost from './ListItemPost.js';
import { Link } from "react-router-dom";
import postList from '../../services/postService.js';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allPosts: []
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = () => {
        postList.fetchPosts()
            .then((postsData) => {
                this.setState({
                    allPosts: postsData
                })
            })
    }

    render() {
        return (
            <div className="container">
                <h4>POSTS</h4>
                <Link to='/posts/new' className="waves-effect waves-light btn">Create New Post</Link>
                {this.state.allPosts.map((el, i) => <ListItemPost value={el} key={i}/>)}
            </div>
        )
    }
}

export default Home;