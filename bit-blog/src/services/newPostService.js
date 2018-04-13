
class CreatePost {

    fetchCreatePost(newPost) {
        return fetch( 'https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            // .then(response => response.json())
            // .then(json => console.log(json))
    }

}

const createPost = new CreatePost();

export default createPost;