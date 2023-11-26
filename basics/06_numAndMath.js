const number=800;

// console.log(number);

const anotherMethode=new Number(123.895600);
// console.log(anotherMethode);

const string= anotherMethode.toString();
// console.log(typeof string);

const fixMethod= anotherMethode.toFixed(2);   //800.00
// console.log(fixMethod);

const LocaleString= anotherMethode.toLocaleString("en-IN")
// console.log(LocaleString);

// console.log(anotherMethode.toExponential(5));
// console.log(anotherMethode.toPrecision(4))


// *************************Maths**************************

// console.log(Math);
// console.log(Math.abs(-9));  // - to + only sing
// console.log(Math.ceil(10.1));//Expected output :11

// console.log(Math.floor(10.3)); //Expected output :10

// console.log(Math.round(10.2)); //Expected output :10

// console.log(Math.round(10.6)); //Expected output :11

// console.log(Math.random());

// console.log(Math.random()*10);

// console.log((Math.random()*10) + 1);

// console.log(Math.floor(Math.random()*10) + 1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max - min + 1 )+min))