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


// MEMORY => Stack(primitive), Heap(non-primitive)
// in Stack always give the copy and in heap always give original value
let myname = "pallavi"
let pname = myname
pname = "kishor"
console.log(pname);
console.log(myname);


let user01 = {
    email: "pallavi@gmail.com",
    upi: "pallavi@ybl"
}


let user02 = user01

user02.email = "pallavi2005@gmail.com"
console.log(user01.email);
console.log(user02.email);

