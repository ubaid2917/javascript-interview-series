//* Print all elements using for...of loop

let arr = [10, 20, 30, 40, 50, 60, 90];

for (let item of arr) {
  console.log(item);
}

// * Find the sum of numbers in an array.
let sum = 0;

for (let item of arr) {
  sum += item;
}

console.log("sum", sum);

// * Find the maximum number in an array.
let maximum = Math.max(...arr);
console.log(maximum);

//* Find the minimum number in an array.
let minimum = Math.min(...arr);
console.log(minimum);

//*  Check if an element exists in an array.

// can find using includes
// can find using indexOf
// can find using lastIndexof

//& using includes
const isExist = arr.includes(100);
console.log("isExist", isExist);

// using indexOf

const isExistIndexOf = arr.indexOf(100);
if (isExistIndexOf === -1) {
  console.log("item is not exist in array");
} else {
  console.log("item exist in array");
}

//* Find the index of an element in an array.
const arrayIndex = arr.indexOf(20);
console.log("index", arrayIndex);

//* create a slice an array
const sliceArr = arr.slice(0, 2);
console.log(arr.slice());
console.log(arr.slice(0, 3));

// * Insert an element at a specific position.
const number2 = [10, 20, 50, 80, 90, 50, 40];
number2.splice(1, 0, 110);
console.log("add element", number2);

number2.splice(4, 0, 512);
console.log("number 2", number2);

// * Delete an element at a specific position.

const number3 = [1000, 900, 800, 700, 600, 500, 400, 300];
number3.splice(number3.length - 1, 1); // remove last element
console.log("number3", number3);

number3.splice(3, 1); // remove three element
console.log("number3", number3);

number3.splice(-2, 0);
console.log("num", number3);

//* merge two array

const frontend = ["html", "css", "javascript", "react"];
const backend = ["node.js", "express.js", "mongodb", "mysql"];

// can spread operatorr
// can concat method

const fullStack = [...frontend, ...backend];
const fullStackRole = frontend.concat(backend);
console.log("full stack", fullStack);
console.log("full stack role", fullStackRole);

//* Sort a string array alphabetically.

const randomAlphabets = [
  "q",
  "m",
  "c",
  "a",
  "u",
  "j",
  "o",
  "h",
  "k",
  "w",
  "d",
  "g",
  "n",
  "y",
  "z",
  "i",
  "f",
  "b",
  "l",
  "p",
  "t",
  "x",
  "r",
  "e",
  "s",
  "v",
];

let sortAlphabetsArr = randomAlphabets.sort();

console.log("sorted array", sortAlphabetsArr);

// * Sort a number array in ascending order.
// & builtin method sort

const numArr = [30, 40, 50, 90, 100, 20];
const sortNumArr = numArr.sort((a, b) => {
  return a - b;
});

console.log(sortNumArr);

//& without builtin method
for (let i = 0; i < numArr.length; i++) {
  for (let j = i + 1; j < numArr.length; j++) {
    if (numArr[i] > numArr[j]) {
      let temp = numArr[i];
      console.log("first step", temp);
      numArr[i] = numArr[j];
      numArr[j] = temp;
    }
  }
}
console.log("numArray sorted without builtin method", numArr);

// * Sort a number array in descending order. 

// nutiltin method
const desSortArr =  numArr.sort((a, b) => {
    return b -a
})

 console.log('desSortArr', desSortArr) 


 //withtout builtin method 
   for(let i  = 0; i<numArr.length; i++){
    for(let j = i + 1; j < numArr.length; j++){
      if(numArr[i] < numArr[j]){
        let temp = numArr[i];
        numArr[i] = numArr[j]
        numArr[j] = temp
      }
    }
  } 
  
  console.log('array',numArr)

// * Add 1 to every number in an array.
