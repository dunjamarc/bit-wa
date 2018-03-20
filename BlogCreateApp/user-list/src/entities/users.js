class User {
    constructor (user){
        this.photo = user.picture.large;
        this.firstName = user.name.first;
        this.email = user.email;
        this.dob = user.dob;
    }

    mailHidden(){
        let arr = this.email.split('.');
        let first = arr[0].substr(0, 3);
        let second = arr[1] + '.' + arr[2];
        let arr2 = second.split('@');
        let surname = arr2[0].substr(arr2[0].length - 3);
        return first + '***' + surname + '@' + arr2[1];
    }
}

export default User;

