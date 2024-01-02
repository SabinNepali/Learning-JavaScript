/*****************LOOPS********************/

/****************For loop*************************** 
    for (initialization; condition; update) {
        // Code to be executed
    }
****************************************************/

for (let i = 0; i < 5; i++) {
    console.log(i);
}   
// Output: 0, 1, 2, 3, 4

/****************While Loop*************************
    while (condition) {
    // Code to be executed
    }   
****************************************************/

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0, 1, 2, 3, 4

/************DO WHILE LOOP***************************
    do {
    // Code to be executed
    } while (condition);
*****************************************************/

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
// Output: 0, 1, 2, 3, 4

/************FOR IN LOOP***************************
    for (variable in object) {
    // Code to be executed
    }
***************************************************/

const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer",
  };
  
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  // Output: name: Alice, age: 30, occupation: Engineer


/************FOR OF LOOP***************************
    for (variable of iterable) {
    // Code to be executed
    }
***************************************************/

const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
// Output: red, green, blue

  


