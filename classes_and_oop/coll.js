function Setname(username){
this.username=username
console.log("colled");
}

function User(username,email, password){
    Setname.call(this,username)
    this.email= email
    this.password= password
}


const info = new User("vishal","v@gmail.com","123")

console.log(info);