// ES6

// class User {
//     constructor(username,email,password){
//         this.username =username;
//         this.email =email,
//         this.password=password
//     }

//     encyptedPassword(){
//         return`adfg${this.password}asdnfkajsn`

//     }
//     changeName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userInfo =new User("vishal","vsr@gmail.com","vi564")

// console.log(userInfo.encyptedPassword());
// console.log(userInfo.changeName());



// behind the scene

function User(userName,age,city,password){
    this.userName =userName;
    this.age= age;
    this.city= city;
    this.password=password;
}

User.prototype.encyptedPassword =function(){
    return `vd${this.password}sdasfasdf`
}

User.prototype.changeName=function(){
    return `${this.userName.toUpperCase()}`
}

const user =new User("Raj","12","Dewas","4568")

console.log(user.encyptedPassword());
console.log(user.changeName());