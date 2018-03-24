import Author from '../entities/authors.js';

class AuthorService {

    fetchAuthors() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(authorData => {
                return authorData.map(author => {
                    return new Author(author);
                })
            })
    }

}

const authorList = new AuthorService();

export default authorList;