import User from '../entities/users.js';


class UserService {

    fetchUsers() {
        return fetch('https://randomuser.me/api/?results=15')
            .then(data => {
                return data.json();
            })
            .then(userData => {
                return userData.results.map(user => {
                    return new User(user);
                })
            })
    }

}

const userList = new UserService();

export default userList;

