/***************FUNCTION*****************/

function sayMyName() {
    console.log('Sabin Nepali');
}

sayMyName();

function addTwoNumbers(Number1, Number2) {
    let result = Number1 + Number2;
    return result;
}

function subtractTwoNumbers(Number1, Number2) {
    return Number1 - Number2;
}

const sum = addTwoNumbers(2,3);
const diff = subtractTwoNumbers(7,3);
console.log("sum: " + sum);
console.log("diff: " + diff);


function loginUserMessage(userName) {
    if(!userName)
    {
        return `Please enter a username!`;
    }
    return `${userName} just logged in !`;
}

console.log(loginUserMessage('Sabin'));
console.log(loginUserMessage(""));

function calculateCartPrice(...price) {         // ... means, n number of parameters can be received by the function.
    return price;
}

console.log(calculateCartPrice(100,200,300));


const user = {
    userName: "Sabin",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and total price is ${anyObject.price}`);
}

handleObject(user);                             // Passing object variable
handleObject({userName: "Sudhir", price: 399}); // Passing object directly


const myNewArray = [200,300,400,100,99];

function returnSecondValue(anyArray) {
    return anyArray[1];
}

console.log(returnSecondValue(myNewArray));         // Pass array variable
console.log(returnSecondValue([100,200,300,400]));  // Pass array directly
