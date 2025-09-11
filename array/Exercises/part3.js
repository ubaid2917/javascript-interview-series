// * 31 . Remove duplicate elements from an array.
let arr = [10,20,30,40,50,60,70,80,90,100,10,40,50,70,90];

//& solution 
// 1. using set
// 2. filter
// 3. without any built in 

let unique = new Set([...arr])
console.log('unique', unique) 

// using filter 
const newArr = arr.filter((item,index) => arr.indexOf(item) === index)
console.log('new arr', newArr); 

function removeDuplicate(){
let uniqueArr = [];
let isSeen = {}
for(let i =0; i<arr.length; i++){
    if(!isSeen[arr[i]]){
        uniqueArr.push(arr[i])
        isSeen[arr[i]] = true
    }
}
return uniqueArr;
}

console.log('remove duplicate', removeDuplicate(arr))



// * 32 Count the number of unique elements in an array.
const countUnique = removeDuplicate(arr).length;
console.log('count unique', countUnique)


// * 33 Reverse an array without using built-in methods. 
let arr2 = [10,20,30,40,50,60,70,80,90]

// reverse with new array
let revArr = [];
for(let i = arr2.length -1; i>=0; i--)
{ 
    revArr.push(arr2[i])
}
console.log('reverse arr', revArr)


// reverse without new array 
for(let i = 0, j = arr2.length -1; i < j; i++, j--){
    let temp = arr2[i]
    arr2[i] = arr2[j]
    arr2[j] = temp
} 
console.log('arr2', arr2)   



// * 34 Add a specific value multiple times in an array.
  
let arr3 = [10,20,30,40,50,60,70,80]
let value = 100;
let repeat = 2;
function addSpecificValue (value, repeat) {
    for(let i  = 0; i<repeat; i++){
        arr3.push(value)
    }
}
addSpecificValue(value, repeat)

console.log('arr3', arr3)   


//* 35 Replace a specific value in an array.


let arr4 = [10,20,30,40,50,60,70,80]
arr4.splice(3, 1, 20)

console.log('arr4', arr4)  


// replace dynamic value 
function replaceValue(arr, oldValue, newValue) {
    const index = arr.indexOf(oldValue);
    if(index !== -1){
        arr.splice(oldValue, 1,  newValue)
    }
    return arr;
} 
console.log(replaceValue(arr4, 80, 90))