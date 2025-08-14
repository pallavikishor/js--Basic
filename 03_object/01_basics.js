// SINGLETON()
//object create


// object literals

const mySym = Symbol("key1")

const user = {
    name: "Pallavi",
    [mySym]: "myKey1",
    age: 21,
    location: "Bhopal",
    email: "pallavi2@gmail.com",
    isloggedIn: false,
    lastlogged: ["Monday", "Saturday"]
}  

console.log(user.email);
console.log(user["email"]);
console.log(user[mySym]);
console.log(typeof user.mySym);

user.email = "pallavi5gmail.com"
//Object.freeze(user)
user.email = "pallavikishor4@gmail.com" 
console.log(user);


user.greeting = function(){
    console.log("hello user");
}

user.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);
    
}
console.log(user.greeting());
console.log(user.greetingTwo());

