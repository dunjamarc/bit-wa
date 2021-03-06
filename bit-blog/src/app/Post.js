import React from 'react';
import { Link } from "react-router-dom";
import postList from '../services/postService.js';
import authorList from '../services/authorService.js';

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allPosts: [],
            allAuthors: [],
            singlePost: {},
            authorName: '',
            sameAuthorPosts: [],
            postId: 0
        }
    }

    componentDidMount() {
        this.setState({postId: this.props.match.params.postId});

        this.fetchData();
    }

    fetchData = () => {
        Promise.all([postList.fetchPosts(), authorList.fetchAuthors()])
            .then((promisesData) => {
                let posts = promisesData[0];
                let authors = promisesData[1];

                this.setState({
                    allPosts: posts,
                })
                this.setState({
                    singlePost: this.state.allPosts[this.state.postId - 1]
                })
                this.setState({
                    allAuthors: authors,
                    idOfAuthor: this.state.singlePost.authorId
                })
            })
            .then((promisesData) => {
                let author = this.state.allAuthors[this.state.idOfAuthor - 1];

                this.setState({
                    authorName: author.name
                })

                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.idOfAuthor}`)
                    .then(response => {
                        return response.json();
                    })
                    .then(authorPosts => {
                        this.setState({
                            sameAuthorPosts: authorPosts
                        })
                    })
            })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            postId: nextProps.match.params.postId
        })

        this.fetchData();
    }

    render() {
        return (
            <div className="container">
                <h4>{this.state.singlePost.title}</h4>
                <h4><Link to={`/authors/${this.state.idOfAuthor}`}>{this.state.authorName}</Link></h4>
                <p className="post-content">{this.state.singlePost.body}</p>
                <h5>{this.state.sameAuthorPosts.length - 1} more posts from same author</h5>
                <ul className="author-posts">
                    {this.state.sameAuthorPosts.filter((e) => {
                            return e.id !== this.state.singlePost.postId;
                        }).map((el, i) => <li key={i}><Link to={`/posts/${el.id}`}>{el.title}</Link></li>)}
                </ul>
            </div>
        )
    }
}

export default Post;