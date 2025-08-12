//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let createdDate = new Date(2025, 7, 12)
//let createdDate = new Date("2025-07-12")
let createdDate = new Date("07-12-2025")
console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(createdDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getDate());

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday:"long"
})