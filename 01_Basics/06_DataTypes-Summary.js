/******Primitive Types**********
    String
    Number
    Boolean
    Null
    Undefined
    Symbol
    BigInt
********************************/

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
const bigNumber = 493753627856439n;

console.table([score, scoreValue, isLoggedIn, outsideTemp, userEmail, id, anotherId, bigNumber]);
console.log();

/****** Reference (Non Primitive) Types**********
    Array
    Object
    Function
*************************************************/

const heroes = ["SRK", "Bhai", "PK"]; // Array

let employeeDetails = {
    fullName: "Sabin Nepali",
    age: 22,
    designation: "Software Engineer"
}                                     // Object

const printEmployeeDetails = function () {
    console.table([employeeDetails]);
}                                     // Function

console.log("heroes: " + heroes);
console.log();
printEmployeeDetails();
console.log();

console.log("type of score is : " + typeof score);
console.log("type of scoreValue is : " + typeof scoreValue);
console.log("type of isLoggedIn is : " + typeof isLoggedIn);
console.log("type of outsideTemp is : " + outsideTemp);
console.log("type of userEmail is : " + typeof userEmail);
console.log("type of id is : " + typeof id);
console.log("type of anotherId is : " + typeof anotherId);
console.log("type of bigNumber is : " + typeof bigNumber);
console.log("type of heroes is : " + typeof heroes);
console.log("type of employeeDetails is : " + typeof employeeDetails);
console.log("type of printEmployeeDetails is : " + typeof printEmployeeDetails);