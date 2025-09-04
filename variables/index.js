//* var

console.log('a', a)   // here it give undefined because of hoisting
var a = 10;
var b = 20;

console.log(a)  

a = 30;

console.log(a)  


// function scope 

// function myFunction(){
//     var c  = 40;
// } 
// console.log('c', c)
// myFunction();   



//* let 
// blocked Scope 
// cannot be redeclared
// can be updated
// dont allow hoisting


let x = 100;
let y = 200;

console.log(x)
console.log(y)  

// blocked scope  
// console.log('z ==>', z)  // here it give error because z is blocked scope
// {
//     let z = 20;
// }
// console.log('z', z)  // here it give error because z is blocked scope  





//* const
// blocked Scope 
// cannot be redeclared
// cannot be updated
// dont allow hoisting


const pi = 3.14;
console.log('pi', pi)
// pi = 3.15;  // it give error because we cannot update const variable  


console.log('fName ==>', fName)  // here it give error fName is not defined because fName is blocked scope and cannot access outside of block
{
    const fName = 'Naeem';
} 
console.log('fName', fName)  // here it give error fName is not defined because fName is blocked scope and cannot access outside of block

