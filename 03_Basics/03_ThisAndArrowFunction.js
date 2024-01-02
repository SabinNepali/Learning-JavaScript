/***************************THIS**********************************/

const user = {
    username: "Sabin",
    price: 999,

    welcomeMessage: function() {
        console.log(`Hi ${this.username}, welcome to my website`);
        console.log(this);
    }
}

console.log(user.welcomeMessage());
user.username = "Sam";
console.log(user.welcomeMessage());
console.log(this);



function one() {
    let username = "Sabin";
    console.log(this.username);
}

one();

const two = function () {
    let username = "Sabin";
    console.log(this.username);
}

two();

const three = () => {
    let username = "Sabin";
    console.log(this.username);
}

three();


/****************************ARROW FUNCTION********************************/

const addTwo = (num1, num2) => {
    return num1 + num2;
}

const addThree = (num1, num2, num3) => num1 + num2 + num3;

const employee = () => ({Name: "Sabin", Age: 22, Designation: "ASE"});

console.log(addTwo(2,3));
console.log(addThree(3,3,5));
console.log(employee());




/*******************************NOTES************************************
    * Inside browser, global object is Window. 
    * 'this' keyword will not work inside functions of any type.
    * function addTwo is explicit return arrow function.
    * function addThree is implicit return arrow function. 
*************************************************************************/