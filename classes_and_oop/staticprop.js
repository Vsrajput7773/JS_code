class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username = ${this.username}`);
    }
  static  createdId(){
        console.log("123");
    }
}

const name =new User("vsr")
// name.createdId()

class Teacher extends User {
    constructor(username,subject){
        super(username)
        this.subject = subject;
    }
}

const tea = new Teacher("ravi","sst")
tea.createdId() 