/********************SCOPES***********************/

let a = 100;

if(true) {
    let b = 200;
    console.log(a);
}

// console.log(b);
console.log(a);


if(true) {
    var c = 400;
}

console.log(c);

if(true) {
    const username = "sabin";
    if(username === "sabin") {
        const website = " facebook";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

function one() {
    const username = "Sabin";
    function two() {
        const website = " Youtube";
        console.log(username);
    }
    two();
    // console.log(website);
}

one();


if(true) {
    const username = "Sabin";
    if(username === "Sabin") {
        const website = " Youtube";
        console.log(username + website);
    }
    // console.log(website); // Out of scope
}

// console.log(username);   // out of scope

console.log(addOne(5));     // Can access addOne before it's declaration, this is called hoisting in JS
function addOne(num) {
    return num + 1;
}


//addTwo(5);                  // Cannot access addTwo before declaration since it's a function expression
const addTwo = function(num) {
    return num + 2;
}


/***************NOTES******************************************************
 * Line no. 10 will give an error because b is local variable and can only
   be accessed inside the scope where it's declared. In this case, if condition.
 * This will print 100 since a is a global variable and can be accessed from
   anywhere. Even from that if block.
 * In line no. 18, c will be printed even if it's inside the scope because
   variables declared with var have functional scope rather than block scope.
   This means that regardless of where var is declared within a function,
   it is hoisted to the top of the function and becomes accessible throughout
   the entire function.
 * function two can access username variable but function one cannot access
   variable website. This is because, username is like gobal variable for
   function two, but its local to function one. For example, Bade log bacchon se
   ice cream nahi chheen sakte but bacche bado se ice cream chhen sakte hein.
   So, Line no 51 mein jo console log hai, woh nahi chalega
 **************************************************************************/
