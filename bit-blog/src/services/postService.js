import Post from '../entities/posts.js';

class PostService {

    fetchPosts() {
        return fetch('http://localhost:3000/posts')
            .then(response => {
                return response.json();
            })
            .then(postData => {
                return postData.map(post => {
                    return new Post(post);
                })
            })
    }

}

const postList = new PostService();

export default postList;