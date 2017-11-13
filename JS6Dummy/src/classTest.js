class User{

    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;
        console.log('constructor has got called ');
    }

    register(){
        console.log("Ueser "+this.username+" has registered");
    }

    static userCount(){
        console.log("user Count has 23");
    }
}

class Member extends User{
    constructor(username, password, email, packages){
        super(username, password, email);
        this.packages = packages;
    }

    details(){
        console.log(this.username+ " has registered for "+this.packages);
    }
}

let param = new Member('param','param123$', 'param@gmail.com', 'standard ');
 
param.details();
param.register();
User.userCount();
// param.userCount();
