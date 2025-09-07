//* array

// is the container used to store multiple values

//& how to create array 
let arr1 = [];
console.log(arr1);

let arr2 = new Array(10, 20,30, 40);
console.log(arr2);

let arr3   


//======= & array with values =========

let arr4 = ["apple", "banana", "orange", "mango"];
console.log(arr4);

let arr5 = new Array("apple", "banana", "orange", "mango");
console.log(arr5);
  

// ======== & array can have different data types ============
let arr6 = ["apple", "banana", "orange", "mango", 10, 20, 30, 40];   


// ======= & array length ==============
let arr7 = ["apple", "banana", "orange", "mango", 10, 20, 30, 40];
console.log(arr7.length); 



//======= & array index ===============
let arr8 = [ 10, 20, 30, 40, 60, 70];
const firstItem = (arr8[0]); 

// mid item
if(arr8.length % 2 === 0){
    const midItem1 = (arr8[arr8.length / 2] - 1);
    const midItem2 = (arr8[arr8.length / 2] )
    console.log(midItem1, midItem2)
}else{
    const midItem = (arr8[(arr8.length - 1) / 2]);
    console.log('midItem', midItem)
}

// last item
const lastItem = (arr8[arr8.length - 1]);
console.log('lastItem', lastItem)  



// ========== modifying array element ======

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[1] = 20;
console.log(numbers);


//===& array method =====

// 1. push()
// 2. pop()
// 3. shift()
// 4. unshift()
// 5. splice()
// 6. slice() 




// push 
const numbers2 = [1, 2, 3, 4, 5];
numbers2.push(6, 7, 8);
console.log(numbers2);

// pop
const numbers3 = [1, 2, 3, 4, 5];
numbers3.pop();
console.log(numbers3);
 

// unshift 
const numbers4 = [1, 2, 3, 4, 5];
numbers4.unshift(0);
console.log(numbers4);

// shift
const numbers5 = [1, 2, 3, 4, 5];
numbers4.shift();
console.log(numbers5);


// slice 
const numbers6  = [10, 20, 30, 40, 50, 60]; 
numbers6.slice() 
console.log( 'numbers6',numbers6)  
 
const res = numbers6.slice(1,3)
console.log('res', res, typeof(res))
console.log(numbers6.slice())  // if no start and end index provided then it will return the whole array
console.log( numbers6.slice(1,3)) // in this case it will return the array from index 1 to index 2 
console.log(numbers6.slice(3 )) // in this case it will return the array from index 3 to the end of the array
console.log(numbers6.slice(-1)) // in this case it will return the last element of the array
console.log(numbers6.slice(-2)) // in this case it will return the last 2 elements of the array


// splice 
// splice() → array ke andar changes karta hai (remove / add / replace values) 


// syntax 

// array.splice(startIndex, deleteCount, item1, item2, item3, ...itemN) 


const numbers7 = [1, 2, 3, 4, 5]; 
console.log('numbers7', numbers7) 
const res2 = numbers7.splice(1, 3);   // in this case it will remove the elements from index 1 to index 3
numbers7.splice(1, 3, 10,20,30,40) // in this case it will replace the elements from index 1 to index 3 with 10,20,30,40
 const res3 =numbers7.splice(1,4,70,80)
console.log( 'numbers7', numbers7)
console.log( 'res3', res3)  



// conctating array 

let arr9 = [1,2,4,4,5,6];
let arr10 = [10,20,30,40,50]

let res4 = arr9.concat(arr10);
console.log('res4', res4)   


// getting array length 
let arr11 = [1,2,4,4,5,6];
console.log('array length', arr11.length)   


//* indexof 
// :To check if an item exist in an array. If it exists it returns the index else it returns -1. 

let arr12 = [1,2,3,4,5,6,7];
console.log(arr12.indexOf(4)); 

console.log(arr12.indexOf(10)); //   it give -1 because 10 is not present in the array 12



// checking item exist r not in array
const fruits = ['banana', 'orange', 'mango', 'lemon']; 

if(fruits.indexOf('grape') === -1){
    console.log('grape is not present in the array')
}else{
    console.log('apple is present in the array')
}

//* lastIndexOf 
// : It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

const numbers8 = [1, 2, 3, 4, 5, 2, 6, 6, 7, 8, 9, 10];

console.log('lastIndexof', numbers8.lastIndexOf(7));
console.log('lastIndexof', numbers8.lastIndexOf(11)) 

if(numbers8.lastIndexOf(12) === -1){
    console.log('12 is not present in the array')
}else{
    console.log('12 is present in the array')
}  
  



// * checking array 
// Array.isArray:To check if the data type is an array

const numbers9 = [1,2,3,4,5,6];
console.log(Array.isArray(numbers9)); 
const str = 20;

console.log(Array.isArray(str))



// * Converting array to string
 //toString:Converts array to string 

 const number10 = [20,30,40,50]
 console.log(number10.toString())  

 const number11 = ['apple', 'mango', 'banana']
 console.log(number11.toString())  



 //* joining array elements 
  
 const number12 = [40,50,60,70];
 console.log(number12.join(''))
 console.log(number12.join('-'))
 console.log(number12.join(' '))
 console.log(number12.join(','))


const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]; 
const res5 = webTechs.join(' '); 
console.log(typeof(res5))
console.log(webTechs.join(','))