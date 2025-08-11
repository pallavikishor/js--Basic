const name = "Pallavi"
const repodays = 50 

//console.log(name + repodays + " value");

console.log(`my name is ${name} and my repodays is ${repodays}`);

const gameName = new String('Pallavi-k')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const S1 = "     pallavi       "
console.log(S1);
console.log(S1.trim());

const url = "https://pallavi.com/pallavi%20kishor"
console.log(url.replace('%20', '-'));
console.log(url.includes('beauti'));
console.log(gameName.split('-'));
