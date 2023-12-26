/***************ARRAYS*******************/

// Array
const myArr = [0,1,2,3,4,5];
const myHeroes = ["SRK", "SELMON", "PK"];

const arr = new Array('Sabin', 23, false);
console.log(myArr);
console.log(myHeroes);
console.log(arr);
console.log();

// Array methods
myArr.push(6);          // push method Adds an element at the last
myArr.push(7);
myArr.pop();            // pop methods removes last element

myArr.unshift(9);           // nshift method Adds an element at the first index right shifts other elements
myArr.shift();              // shift method removes first element and left shifts all other elements

console.log(myArr.includes(9));     // includes method tells if the element is present in the array or not
console.log(myArr.indexOf(3));      // indexOf method gives the index of the element

const newArr = myArr.join();

/*******IMPORTANT***********Slice and Splice Methods*************IMPORTANT******/

// Slice
let cities = ["Kathmandu", "Delhi", "Noida", "Bangalore", "Pune"];
console.log(cities);
console.log("Let's slice cities: " + cities.slice(0,2));  // Gives elements between 0 and 2 index.
console.log("Cities after slice: " + cities);
console.log("The slice method doesn't alters original array");
console.log();

// Splice
let countries = ["Nepal", "India", "Pakistan", "Bhutan", "Bangladesh"];
console.log(countries);
console.log("Let's splice countries: " + countries.splice(0,2));    // Gives elements from 0 to 1 index.
console.log("countries after splice: " + countries);
console.log("The splice method does make changes to original array");




/************************NOTES*********************************
 
    * Array in JS is resizeable.
    * Array in JS can hold elements of different data types.
    * The Slice method doesn't make changes to original array.
    * The Splice method does make changes to original array.
    
***************************************************************/

