/**********************IF ELSE IF**********************/

let num = 10;
if (num > 0) {
  console.log("Number is positive");
} else if (num === 0) {
  console.log("Number is zero");
} else {
  console.log("Number is negative");
}

/**********************SWITCH CASE**********************/

let day = 3;
let dayString;

switch (day) {
  case 1:
    dayString = "Sunday";
    break;
  case 2:
    dayString = "Monday";
    break;
  case 3:
    dayString = "Tuesday";
    break;
  case 4:
    dayString = "Wednesday";
    break;
  case 5:
    dayString = "Thursday";
    break;
  case 6:
    dayString = "Friday";
    break;
  case 7:
    dayString = "Saturday";
    break;
  default:
    dayString = "Invalid day";
}

console.log(`The day corresponding to ${day} is ${dayString}.`);


// Falsy Values : false, 0, -0, BigInt, 0n, "", null, undefined, NaN
// Truthy Values : "0", 'false', " ", [], {}, function(){} etc... 

// Nullish Coalescing Operator (??) -- > Works on null and undefined

function greetUser(name) {
  let username = name ?? "Guest";
  console.log(`Hello, ${username}!`);
}

greetUser(null); // Output: "Hello, Guest!"
greetUser("Alice"); // Output: "Hello, Alice!"


/***********************TERNARY OPERATOR**********************************/
let age = 20;
let allowed = age >= 18 ? "Yes" : "No";

console.log(`Allowed to vote? ${allowed}`); // Output: "Allowed to vote? Yes"


