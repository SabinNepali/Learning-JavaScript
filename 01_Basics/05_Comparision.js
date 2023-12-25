// Comparision between same types
console.log(2 > 1);
console.log(2 == 1);
console.log(2 < 1);
console.log(2 != 1);
console.log();

// Comparision between different types
console.log("2" > 1);
console.log("02" > 1);
console.log();

// Comparision with null
console.log(null > 0);
console.log(null == 0);
console.log(null < 0);
console.log(null >= 0);
console.log();

// Comparision with undefined
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log();

// Difference between == and ===
console.log("2" == 2); // true, since conversion happens and compares.
console.log("2" === 2); // false, since their types are different. 


// ************************NOTES*********************** // 
/*  
    Equality check (==) and comparisions (>=) work differently.
    Comparisons convert null to a number, treating it as 0.
    That's why null >= 0 is true and null > 0 is false.
*/

/*  
    There's a difference between == and ===
    1. Double equal to (==) simply compares two values, not taking data type as consideration 
        since conversion takes place between two variables.

    2. Triple equal to (===) also checks the data types of the variables being compared.
        Its called strict checking.
*/