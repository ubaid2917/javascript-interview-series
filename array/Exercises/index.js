// * 1 Declare an array with more than 5 number of elements
let arr = [1, 2, 3, 4, 5, 6];

//* Find the length of your array
console.log(arr.length);

//* Get the first item, the middle item and the last item of the array

//firstt item
let firstItem = arr[0];

// middle item
if (arr.length % 2 === 0) {
  let midItem2 = arr[Math.floor(arr.length / 2) - 1];
  let midItem = arr[Math.floor(arr.length / 2)];

  console.log(midItem2, midItem);
} else {
  let middleIndex = Math.floor(arr.length / 2);
  let middleItem = arr[middleIndex];
  console.log(middleItem);
}

// last item
let lastItem = arr[arr.length - 1];

console.log(firstItem);
console.log(lastItem);

//* Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
  "TCS",
];

//* Print the array using console.log()
console.log(itCompanies);

//* Find the length of the array using array.length
console.log(itCompanies.length);

//* find the first, midle, last compnay
console.log("first item", itCompanies[0]);

if (itCompanies.length % 2 === 0) {
  let midItem = itCompanies[Math.floor(itCompanies.length / 2) - 1];
  let midItem2 = itCompanies[Math.floor(itCompanies.length / 2)];

  console.log(midItem, midItem2);
} else {
  let middleItem = itCompanies[Math.floor(itCompanies.length / 2)];
  console.log(middleItem);
}
// last item
console.log("mid item", itCompanies[itCompanies.length - 1]);

//* Change each company name to uppercase one by one and print them out

// for(let i = 0; i<itCompanies.length; i++){
//     const item = itCompanies[i].toUpperCase();
//     console.log('company', item)
// }

//* Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let specificCompany = "Ibm";
if (itCompanies.indexOf(specificCompany.toLowerCase()) === -1) {
  console.log(`${specificCompany} is not exist`);
} else {
  console.log(`${specificCompany} is  exist`);
}

//* Filter out companies which have more than one 'o' without the filter method

let unique = [];

for (let i = 0; i < itCompanies.length; i++) {
  let item = itCompanies[i];
  let countO = 0;
  for (let j = 0; j < item.length; j++) {
    if (item[j].toLowerCase() === "o") {
      countO++;
    }
  }

  if (countO >= 2) {
    unique.push(item);
  }
}
console.log("result", unique);
   




// * reverse the array 
const reverseArr = itCompanies.reverse();
console.log('reverse arr', reverseArr)  


//* Slice out the first 3 companies from the array

const slicedArr = itCompanies.slice(0,3);
console.log('slicedArr', slicedArr)   

//* Slice out the last 3 companies from the array 

const lastSlicedArr = itCompanies.slice(-3);

console.log('lastSlicedArr', lastSlicedArr)
 

//* slice out middle company  

if(itCompanies.length % 2 === 0){
 const middlItem1 = Math.floor(itCompanies.length / 2);

 const res = itCompanies.slice(middlItem1 - 1 , middlItem1 + 1)
    console.log('res', res)
 
}else{
const middleCompany = Math.floor(itCompanies.length / 2) ;
const sliceMiddleCompany = itCompanies.slice(middleCompany, middleCompany + 1)

console.log('sliced company ', sliceMiddleCompany)
}
 

//* remove the first it company 
 const spliceFirst = itCompanies.splice(0,1);
 console.log('spliceFirst', spliceFirst) 



//* remove the middle it company 
const midSplice = itCompanies.length / 2 - 1
 const spliceMiddle = itCompanies.splice(midSplice, 2 );
 
 console.log('splice middle', spliceMiddle)