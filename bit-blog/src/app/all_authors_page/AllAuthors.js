import React from 'react';
import ListItemAuthor from './ListItemAuthor';
import authorList from '../../services/authorService';
import postList from '../../services/postService';

class AllAuthors extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allAuthors: []
        }
    }

    componentDidMount(){
        Promise.all([authorList.fetchAuthors(), postList.fetchPosts()]) // finish all promises
            .then((promisesData) => {
                let authors = promisesData[0];
                let posts = promisesData[1];

                authors.forEach((author) => {
                    posts.forEach((post) => {
                        if(post.authorId === author.id){
                            author.posts.push(post);
                        }
                    })
                })

                this.setState({
                    allAuthors: authors
                })
                
            })
    }

    render() {
        return (
            <div className="container">
                <h4>AUTHORS ({this.state.allAuthors.length})</h4>
                {this.state.allAuthors.map((el, i) => <ListItemAuthor value={el} key={i}/>)}
            </div>
            
        )
    }
}

export default AllAuthors;