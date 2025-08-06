const accountId = 1443383
let accountEmail = "pallavikishor02@gmail.com"
var accountPassword = "12983"
accountCity = "Bhopal"

//accountId = 1 // not allowed

accountEmail = "pallavi2@gmail.com"
accountPassword = "21212121"
accountCity = "Muzaffarpur"
let accountState;
/*
prefer not to use var(why?)
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity, accountState]);
