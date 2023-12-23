// Declaring and Initialize variables
const accountId = 2248;
let accountEmail = "ersabin123@gmail.com";
var accountPassword = "aa11BB22cc";
accountCity = "Noida"
let accountStatus;

// Let's try to change the values
//accountId = 2249; ---> Not allowed since accountId is a const variable   
accountEmail = "sabin.nepali@cginfinity.com";
accountPassword = "erSabin@123";
accountCity = "Delhi"

console.log('*********** Printing values ony by one ***********')
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountStatus);

console.log();
console.log('*********** Printing Values in tabular format ***********')
console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus]);

/*
    1. Prefer not to use var because of issue in block scope and functional scope.
    2. You can declare a variable without explicitly writing var or let. But this is a very bad practice.
    3. Variable without value assigned is undefined in Js. for ex :- accountStatus
*/