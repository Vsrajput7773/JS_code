
const myNum=[1,2,3]

// const myTotal =myNum.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and curval : ${currval}`);
//     return acc +currval
// },0)
// console.log(myTotal);

// shothand

const myTotal =myNum.reduce((acc ,curr)=> acc+curr ,0)
// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"mobile",
        price:12000
    },
    {
        itemName:"tv",
        price:15000
    },
    {
        itemName:"computer",
        price:20000
    },
    {
        itemName:"laptop",
        price:45000
    },
]

const priceTotal=shoppingCart.reduce((acc,item)=> acc +item.price ,0)

console.log(priceTotal);