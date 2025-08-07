//PRIMITIVE

// 7 types : String, Nuber, Boolean, Null, Undefined, Symbol(unique),BigInt

const score = 100
const scoreValue = 100.3
console.log(typeof scoreValue);

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id ===anotherId);

const bigNumber = 23356678987654n


//REFERENCE(NON PRIMITIVE)

// Array, Objects, Functions

const friends = ["pallavi", "Devika", "Shivmani"];
let myObj = {
    name: "Chhotu",
    age: 23,
}


const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof bigNumber);
console.log(typeof myFunction);
