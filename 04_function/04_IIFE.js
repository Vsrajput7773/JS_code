// IIFE function 

(function vsr(){
    console.log(`Hello this is IIFE function`);
})();

((name)=>{
    console.log(`Hello ${name} ,this is a IIFE function invoked`);
})("vishal")