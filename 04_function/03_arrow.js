const User ={
    username:"vishal",
    price:7773,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this)
    }
}
// User.welcomeMessage()
// User.username="vsr"
// User.welcomeMessage()

// console.log(this);

// function vsr() {
//    let User="vishal"
//     console.log(this.User);
// }
// vsr()

// const addTwo =(num1,num2)=>{
//     return num1 + num2
// }

// console.log(addTwo(7,1));

// const addTwo =(num1,num2)=> num1 + num2
// const addTwo =(num1,num2)=> (num1 + num2)
const addTwo =(num1,num2)=> ({userId:123})

console.log(addTwo());