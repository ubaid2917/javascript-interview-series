// * Object 

// * Make an empty object Called Car

let car = {};

//* print the car object
console.log(car)

// * add car details 

car.name = 'Civic';
car.model  = 'Honda';
car.color = 'white';
car.price = '1cr';

console.log('car', car)


// * 
 const users = {
   Alex: {
     email: "alex@alex.com",
     skills: ["HTML", "CSS", "JavaScript"],
     age: 20,
     isLoggedIn: false,
     points: 30
   },
   Asab: {
     email: "asab@asab.com",
     skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
     age: 25,
     isLoggedIn: false,
     points: 50
   },
   Brook: {
     email: "daniel@daniel.com",
     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
     age: 30,
     isLoggedIn: true,
     points: 50
   },
   Daniel: {
     email: "daniel@alex.com",
     skills: ["HTML", "CSS", "JavaScript", "Python"],
     age: 20,
     isLoggedIn: false,
     points: 40
   },
   John: {
     email: "john@john.com",
     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
     age: 20,
     isLoggedIn: true,
     points: 50
   },
   Thomas: {
     email: "thomas@thomas.com",
     skills: ["HTML", "CSS", "JavaScript", "React"],
     age: 20,
     isLoggedIn: false,
     points: 40
   },
   Paul: {
     email: "paul@paul.com",
     skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
     age: 20,
     isLoggedIn: false,
     points: 40
   }
 } 

 const data = users.map((user) => {
    console.log('user', user)
 })