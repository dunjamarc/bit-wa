class User {
    constructor (user){
        this.photo = user.picture.large;
        this.firstName = user.name.first;
        this.email = user.email;
        this.dob = user.dob;
    }

   


}

export default User;

// function mailHidden(email){
//     let mail = email;
//     let arr = mail.split('.');
//     let first = arr[0].substr(0, 3);
//     let stars = arr[0].length - 3;
//     for(let i = 0; i < stars; i++){
//         first += '*'; 
//     }
//     let arr2 = arr[1].split('@');
//     let second = arr2[0].slice(2);
   
//     let starMail = first + second;


// }

// console.log(mailHidden('oliver.lewis@example.com'));

// let novi = email.split('');
// novi.splice(3, 3, '.', '.', '.');
// novi.join('');
// return novi;