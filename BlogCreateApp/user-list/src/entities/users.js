class User {
    constructor (user){
        this.photo = user.picture.large;
        this.firstName = user.name.first;
        this.email = user.email;
    }
}

export default User;