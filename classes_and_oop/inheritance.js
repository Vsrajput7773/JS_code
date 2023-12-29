class User {
  constructor(username){
    this.username = username;

  }
  logMe(){
    console.log(`USERNAME = ${this.username}`);
  }

}

class Teacher extends User {
  constructor(username,email, password){
    super(username)
    this.email = email;
    this.password = password;
  }
  addCourse(){
    console.log(`A new Course was added by teacher ${this.username} `);
  }
}

const tea =new Teacher("vsr","v@gmail.com","123")
// tea.logMe() // USERNAME = vsr
// tea.addCourse()

const use =new User("vishal");

console.log(use);