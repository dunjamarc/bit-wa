class Post {
    constructor(posts){
        this.authorId = posts.userId;
        this.postId = posts.id;
        this.title = posts.title;
        this.body = posts.body;
    }
}

export default Post;