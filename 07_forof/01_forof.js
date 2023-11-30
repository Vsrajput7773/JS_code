
const number=[1,2,3,4,5,6,7,9]

for (const num of number) {
    // console.log(num);
    
}
const String="vishal Rajput"
for (const str of String) {
    // console.log(str);
}


// map 

const map=new Map()
map.set("In","India")
map.set("USA","United States of America")
map.set("Fr","France")
map.set("In","India")

// console.log(map);
for (const [key,value] of map) {
    console.log(key,":-",value);
}



// const obj ={
//     js:"javaScript",
//     py:"python",
//     cpp:"c++",
//     rb:"ruby"
// }

// for (const language of obj) {
//     console.log(language);
// }                               //out put is object is not iteralble