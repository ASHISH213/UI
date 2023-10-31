class User{

    userName;
    gender;
    email;
    constructor(name,gender,email){
        this.userName=name;
        this.gender=gender;
        this.email=email;
    }

    display(){
        console.log(this.userName,this.gender,this.email);
    }
}

var user1=new User("raj","mae","abgdj@mail");
var user2=new User("ashish","mae","abgdj@mail");

user1.display();
user2.display();