// const TinderUser=new Object()
const Tinder={}
// console.log(Tinder)
// console.log(TinderUser);

// Tinder.email="vsr.com"
// Tinder.fulName="vishal Rajput"

// console.log(Tinder);

const NestedObj={
    email:"asc.com",
    fullname:{
        userFullName:{
            firstName:"vishal",
            lastName:"Rajput"

        }
    }
}

// const obj=NestedObj.fullname.userFullName.firstName
// console.log(obj);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={...obj1,...obj2}
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);


const Usrer=[
    {
        _id:"2abc",
        password:1
    },
    {
        _id:"3abc",
        password:12
    },
    {
        _id:"4abc",
        password:123
    }
]
// console.log(Usrer[0]._id);

const obj={
    name:"vishal",
    age:25,
    email:"vs@12.com"
}

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log(obj.hasOwnProperty("loggedIn"))

const User={
    userName:"vishal",
    UserId:"12abc",
}
// User.UserId

const{UserId:Id}=User
// console.log(UserId);
// console.log(Id)


// json

// {
//  " userName":"vishal",
//     "UserId":"12abc",
// }

[
    {},
    {},
    {}
]
