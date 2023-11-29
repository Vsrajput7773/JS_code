// function

// function sayMyName(){
//     console.log("vishal")
// }
// sayMyName()

// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }
// const result=addTwoNumber(4,5)
// console.log(result);


function addTwoNumber(num1,num2){
    // let num3=num1 + num2

    return num1 + num2
}
const result=addTwoNumber(4,5)
// console.log(result);

function userLoggedIn(userName ="User"){
    if(!userName){
        console.log("user Name is requried");
        return
    }
    console.log(`${userName} just loggedin`);
}

// userLoggedIn()

function calculateCarPrice(...num){
    return num
}

const result1 =calculateCarPrice(5986365,2556,5894)
// console.log(result1);

const User={

    userName:"vishal",
    bookPrices:1555
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and book price is ${anyobject.bookPrices}`);
}

// handleObject(User)

// handleObject({
//     userName:"vsr",
//     bookPrices:566
// })

const myNewArray =[200,560,998,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,560,998,600]));