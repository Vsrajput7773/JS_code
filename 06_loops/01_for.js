// for loop

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(index);
    
// }

// for (let i = 1; i <=10; i++) {
//     console.log(`I inner loop value ${i}`);
//     for (let j = 1; j <=10; j++) {
//         // console.log(`j innerloop vlaue ${j}`);

//         console.log(`${i} * ${j} = ${i*j}`);
//     } 
// }

// +++++++++++++break++++


// for (let i = 0; i <=10; i++) {
//     const element = i ;
//     if (i==5) {
//         console.log("value 5 is Importend");
//         break;
//     }
//     console.log(element);

// }

for (let i = 0; i <=10; i++) {
    const element = i ;
    if (i==5) {
        console.log("value 5 is Importend");
        continue;
    }
    console.log(element);

}