import createBlog from './UIModule.js';

const printAllBlogs = (() => {

    fetch ('http://127.0.0.1:3000/')
    .then(response => {
        return response.json();
    })
    .then(blogArr => {
        blogArr.forEach(element => {
            createBlog(element);
        });
    })
})();