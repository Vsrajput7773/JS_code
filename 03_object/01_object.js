// singleton
// object.create

// object literals

const mysym=Symbol("key1")
const MyObject={
    name:"vishal",
    "fullName":"vishal Rajput",
    age:20,
    [mysym]:"vsr",
    email:"vsr@gmail.com",
}

// console.log(MyObject);
// console.log(MyObject.email);
// console.log(MyObject["fullName"]);
// console.log(typeof MyObject[mysym]);

MyObject.email ="google.com"
// Object.freeze(MyObject)

MyObject.name="RAJ"

// console.log(MyObject);


MyObject.greeting=function(){
    console.log("Hello");
}

MyObject.greetingTwo=function(){
    console.log(`Hello JS user ${this.fullName}`);
}

console.log(MyObject.greeting());
MyObject.greetingTwo()
