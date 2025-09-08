//* object 
// we use different data type values in object with key value pair 

//& Creating an empty object 

const obj = {};

//& Creating an objecting with values 
const rectangle = {
    width: 20,
    height: 40
}  

console.log(rectangle)  


const person = {
    name: 'Ubaid Naeem',
    fatherName: 'Naeem Akhtar',
    age: 23,
    address: {
        country: 'pakistan',
        city: 'Lahore'
    },
    skills: [
        'Html',
        'Css',
         'Javascrpt'
    ]
} 

// console.log('person', person)



//& Getting values from an object 

   // we can access the values of object using two methods
  //1  using .  
  //2 using [] bracket 
  
  
//? accessing using .  
// console.log(person.name);
// console.log(person.fatherName)
// console.log(person.age)  


//? accessing using []
// console.log(person['name'])
// console.log(person['fatherName'])
// console.log(person['age']);



//& creating object methods 
const person2 = {
  firstName: 'Ubaid',
  lastName: 'Naeem',
  age: 250,
  country: 'pakistan',
  city: 'lahore',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ], 
  getFullName: function (){
    return `${this.firstName} ${this.lastName}`
  }
}  

// print person 2  
// console.log(person2['firstName'])
// console.log(person2['lastName'])
// console.log(person2.getFullName())
// console.log(person2['age'])
// console.log(person2['city']) 



//& Setting new key for an object 
const person3 = {
  firstName: 'Ubaid',
  lastName: 'Naeem',
  age: 250,
  country: 'pakistan',
  city: 'lahore',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ], 
  getFullName: function (){
    return `${this.firstName} ${this.lastName}`
  }
}  
person3.nationality = 'pakistani';
person3.religion = 'islam';


console.log(person3['firstName'])
console.log(person3['lastName'])
console.log(person3['age'])
console.log(person3['city'])
console.log(person3['nationality'])
console.log(person3['religion'])  


//& object methods 
// these are the different method to manipulate object 

//? Object.assign:
// To copy an object without modifying the original object

const copyPerson = Object.assign({}, person);
const copyPerson2 = Object.assign({}, person2);
const copyPerson3 = Object.assign({}, person3)

console.log('copy person', copyPerson)
console.log('copy person 2', copyPerson2)
console.log('copy person 3', copyPerson3)


//& Getting object keys using Object.keys()
// Object.keys: To get the keys or properties of an object as an array

const keys1 = Object.keys(person);
const keys2 = Object.keys(person2);
const keys3 = Object.keys(person3);

console.log('keys', keys1)
console.log('keys', keys2)
console.log('keys', keys3)


// & Getting object values using Object.values()
const objValues = Object.values(person);


console.log('obj values', objValues)
console.log('obj values 2', Object.values(person2));
console.log('obj vlaues 3', Object.values(person3)); 


//& Getting object keys and values using Object.entries()
const objEntries = Object.entries(person)

console.log('objEnteries', objEntries)
console.log('object enteries 2', Object.entries(person2));
console.log('object enteries 3', Object.entries(person3))


// & Checking properties using hasOwnProperty()
// hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))