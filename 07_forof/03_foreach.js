
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(val){           //foreach is hoc 

// console.log(val);
// })

// coding.forEach( (item)=>{
// console.log(item);
// })

// function print(item){
//     console.log(item);
// }
// coding.forEach(print)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myProgramin=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]

myProgramin.forEach((item)=> {
    // console.log(item.languageName);
});

 const coding1 = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values);
