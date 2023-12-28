// First Method Syntex

// const promiseOne= new Promise(function(resolve,reject){})  // syntex
/*
const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task is compelete")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise One is resolved')
})

new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("Async task 2");
    resolve()
},1000)
}).then(function(){
    console.log('Task after promise task 2');
})

// promise three 

new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("Async task 3");
        resolve({UserName:"vishal",email:"vs@demo.com"})
    },1000)
}).then(function(user){
    console.log('Task after promise task 3',user);
})

// Promise four

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("task 4 ");
//         resolve({userName:"Raj",age:21})
//     },1000)
// }).then((user)=>{
// const result=user.userName
// return result
// }).then((data)=>{
//     console.log(data);
// })

new Promise((resolve,reject)=>{
    setTimeout(()=>{

        let error =false

       if (!error) {
         resolve({userName:"Raj",age:21})
       } else {
        reject("Somthing went wrong")
       }
    },1000)
}).then((user)=>{
const result=user.userName
return result
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
console.log("The Promise is resolved or rejected");
})
*/
// Promise Five

// useing Async and await


const promiseFive= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let error =false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
           reject("Error :js Error") 
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response=  await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// featch  

async function getAllUsers(){
    try {
   const response=  await fetch ("https://jsonplaceholder.typicode.com/users")
   console.log(response)
   const data=await response.json();
    } catch (error) {
        console.log("E",error);
    }
}

getAllUsers()

// fetch('https://api.github.com/users/vsrajput7773')
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })