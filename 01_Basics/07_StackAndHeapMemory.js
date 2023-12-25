/***********Stack and Heap Memory*****************

    Stack memory stores primitive types 
    Heap memory stors reference types

**************************************************/

// Primitive Types using Stack memory
let myName = "Sabin Nepali";
let myAnotherName = myName;

myAnotherName = "Rajesh Hamal";

console.log(myName);
console.log(myAnotherName);
console.log();


// Reference Types using heap memory
let userOne = {
    email: "sabin.nepali@cginfinity.com",
    upi: "user@okhdfc"
}

let userTwo = userOne;

console.log(userOne);
console.log(userTwo);
console.log();

userTwo.email = "sabin.nepali@google.com";
userTwo.upi = "user@icicibank"

console.log(userOne);
console.log(userTwo);

/*************************************Notes**************************************************************

1.  We first initialized a variable 'myName' 
    and then declared another variable 'myAnotherName' and assigned it's value equal to 'myName'.
    After that, we modified the value of 'myAnotherName' and console logged both variables. 
    We see the result as :  Sabin Nepali ----> myName
                            Rajesh Hamal ----> myAnotherName
    What's happening behind the scene is, when we assigned 'myAnotherName' with 'myName', a copy of 
    'myName' is assigned to 'myAnotherName' in the stack memory. That's why, when we later modify the 
    value of 'myAnotherName', the value of 'myName' didn't change.

2.  We initialized an object 'userOne' with some values and after that initialized another variable
    'userOne' and assigned it's value equal to 'userOne'. Now, we console logged both 'userOne' and
    'userTwo' which printed same values for both, Perfect ! 
    Now, we changed some values of 'userTwo' and console logged both 'userOne' and 'userTwo'. 
    In this case, the the values of 'userOne' has also changed. 
    What's happening behind the scene is, when an object is declared, which is reference type, 
    get's stored in heap memory. And when another variable's value is assigned to the first one, then
    the second variable is also accessing the same heap memory which first variable was using. 
    So, whenever second variable changes some values, or any variable changes some values then the 
    values are changed for all the variables which are referencing to the same memory address.

*********************************************************************************************************/



