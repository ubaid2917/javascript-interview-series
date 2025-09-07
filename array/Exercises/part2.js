//* 13 Print all elements using for...of loop

let arr = [10, 20, 30, 40, 50, 60, 90];

for (let item of arr) {
  console.log(item);
}

// * 14 Find the sum of numbers in an array.
let sum = 0;

for (let item of arr) {
  sum += item;
}

console.log("sum", sum);

// * 15 Find the maximum number in an array.
let maximum = Math.max(...arr);
console.log(maximum);

//* 16 Find the minimum number in an array.
let minimum = Math.min(...arr);
console.log(minimum);

//* 17 Check if an element exists in an array.

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

//* 18 Find the index of an element in an array.
const arrayIndex = arr.indexOf(20);
console.log("index", arrayIndex);

//*  19 create a slice an array
const sliceArr = arr.slice(0, 2);
console.log(arr.slice());
console.log(arr.slice(0, 3));

// * 20 Insert an element at a specific position.
const number2 = [10, 20, 50, 80, 90, 50, 40];
number2.splice(1, 0, 110);
console.log("add element", number2);

number2.splice(4, 0, 512);
console.log("number 2", number2);

// * 21 Delete an element at a specific position.

const number3 = [1000, 900, 800, 700, 600, 500, 400, 300];
number3.splice(number3.length - 1, 1); // remove last element
console.log("number3", number3);

number3.splice(3, 1); // remove three element
console.log("number3", number3);

number3.splice(-2, 0);
console.log("num", number3);

//* 22 merge two array

const frontend = ["html", "css", "javascript", "react"];
const backend = ["node.js", "express.js", "mongodb", "mysql"];

// can spread operatorr
// can concat method

const fullStack = [...frontend, ...backend];
const fullStackRole = frontend.concat(backend);
console.log("full stack", fullStack);
console.log("full stack role", fullStackRole);

//* 23 Sort a string array alphabetically.

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

// * 24 Sort a number array in ascending order.
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

// * 25 Sort a number array in descending order.

// nutiltin method
const desSortArr = numArr.sort((a, b) => {
  return b - a;
});

console.log("desSortArr", desSortArr);

//withtout builtin method
for (let i = 0; i < numArr.length; i++) {
  for (let j = i + 1; j < numArr.length; j++) {
    if (numArr[i] < numArr[j]) {
      let temp = numArr[i];
      numArr[i] = numArr[j];
      numArr[j] = temp;
    }
  }
}

console.log("array", numArr);

// * 26 Add 1 to every number in an array.

const newArray = numArr.map((item) => item + 1);
console.log("new array", newArray);

// * 27 Square every element in an array.
// using map method
const sqrArr = numArr.map((item) => item * item);
console.log("sqrArr", sqrArr);

// using for of loop
let sqrt1 = [];
for (let item of numArr) {
  sqrt1.push(item * item);
}
console.log("sqrt", sqrt1);

// using for loop

let sqrt2 = [];
for (let num of numArr) {
  sqrt2.push(num * num);
}
console.log("sqrt2", sqrt2);

//  * 28 Count the number of negative numbers in an array.
let count = 0;

let mixedArr = [10, 20, -1, -3, -5, -6, -9, 10, -11];

for (let i = 0; i < mixedArr.length; i++) {
  if (mixedArr[i] < 0) {
    count++;
  }
}
console.log("negative count", count);

// * 29 , 30   Find the sum of all even numbers in an array.
   let evenSum = 0;
   let oddSum = 0;
   let arr2 = [10,11,13,15,16,14,18,20];

   for(let i = 0; i<arr2.length; i++){
     if(arr[i] % 2 === 0){
        evenSum += arr2[i]
     }else{
        oddSum += arr2[i]
     }
   } 
   console.log('evensum', evenSum)
   console.log('oddsum', oddSum)



