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

/***************NOTES******************************************************
 * Line no. 10 will give an error because b is local variable and can only 
   be accessed inside the scope where it's declared. In this case, if condition.
 * This will print 100 since a is a global variable and can be accessed from 
   anywhere. Even from that if block. 
 * IN line no. 18, c will be printed even if it's inside the scope because 
   variables declared with var have functional scope rather than block scope.
   This means that regardless of where var is declared within a function, 
   it is hoisted to the top of the function and becomes accessible throughout 
   the entire function.
 **************************************************************************/