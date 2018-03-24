class Author {
    constructor(authors){
        this.id = authors.id;
        this.name = authors.name;
        this.username = authors.username;
        this.email = authors.email;
        this.phone = authors.phone;
        this.street = authors.address.street;
        this.city = authors.address.city;
        this.zipcode = authors.address.zipcode;
        this.companyName = authors.company.name;
        this.catchPhrase = authors.company.catchPhrase;
        this.posts = [];
    }
}

export default Author;