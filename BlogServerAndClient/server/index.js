var loremIpsum = require('lorem-ipsum');

// const blog = {
//     id: Math.random(),
//     title: loremIpsum({count: 3, units: 'words'}),
//     intro: loremIpsum({count: 2, units: 'sentences'})
// }

class Blog {
    constructor(id, title, intro) {
        this.id = id;
        this.title = title;
        this.intro = intro;
    }
}

const createBlog = () => {

    let arrOfBlogs = [];
    for (let i = 0; i < 10; i++) {
        let id = Math.floor(Math.random() * 20);
        let title = loremIpsum({ count: 3, units: 'words' });
        let intro = loremIpsum({ count: 2, units: 'sentences' });

        let blog = new Blog(id, title, intro);
        arrOfBlogs.push(blog);
    }
    return arrOfBlogs;
}

module.exports.createBlog = createBlog;