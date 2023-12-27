/********************************OBJECTS IN JAVASCRIPT********************************/

/*****************Object literals***************************/

const zodiac = Symbol("Tarus");     //Symbol.

const employee = {                                       // Creating employee object.
    fullName: "Sabin Nepali",
    age: 22,
    designation: "Consultant 1",
    email: "sabin.nepali@cginfinity.com",
    isActive: true,
    [zodiac]: "Libra"       // Using symbol as a key.
}

console.log(employee);      // printing the employee object.
console.log(employee[zodiac]);  // This is how we can access the key of type symbol in object.

employee.designation = "Consultant 2"   // we can change value of a key if an object like this.

employee.email = "ersabin123@gmail.com";

console.log(employee);

employee.greetingOne = function () {    // Adding a key to the object, which is a function.
    console.log("Hello Bro!");
}

employee.greetingTwo = function () {
    console.log(`Hello Bro!, ${this.fullName}`);    // this refers to the employee object itself.
}

console.log(employee.greetingOne());    // this is how we can print the value of a key which holds a function as a value.
console.log(employee.greetingTwo());

console.log(employee.email);
console.log(employee['email']);

Object.freeze(employee);        // Now, employee object is freezed to death. We cannot change the values of the keys inside it.


/*****************Singleton***************************/

const tinderUser = new Object();
tinderUser.id = '69';
tinderUser.name = "Sabin",
tinderUser.age = 22,
tinderUser.isLoggedIn = true

console.log(tinderUser);

const regularUser = {
    email: "someone@example.com",
    fullName: {
        userFullName: {
            firstName: "Sabin",
            lastName: "Nepali"
        }
    }
}

const fullName = regularUser.fullName?.userFullName.firstName;
console.log(fullName);

console.log(regularUser);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {4: "e", 5: "f"}
const object4 = {obj1, obj2};
const object5 = Object.assign({}, obj1, obj2, obj3);
const object6 = {...obj1, ...obj2, ...obj3}
console.log(object6);


const users = [
    {
        id: 1,
        email: "sabin.nepali@cginfinity.com"
    },
    {
        id: 2,
        email: "kapil.nepali@cginfinity.com"
    },
    {
        id: 3,
        email: "apil.nepali@cginfinity.com"
    }
]

console.log(users);
console.log(users[1].email);

console.log(Object.keys(tinderUser)); // Interesting, fetches all the keys of an object and returns them in array.
console.log(Object.values(tinderUser)); // Interesting, fetches all the values of an object and returns them in array.
console.log(Object.entries(tinderUser)); // Interesting, fetches all the keys and values of an object and returns them in array.

console.log(tinderUser.hasOwnProperty('isLogged'));     // hasOwnProperty method checks if the provided property is present in the object or not.



