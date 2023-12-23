// Converting number to string
let number = 69;
let numberConvertedToString = String(number);

console.table([number, numberConvertedToString, typeof number, typeof numberConvertedToString]);

// converting string to number
let numberInString = "69";
let numberInStringConvertedToNumber = Number(numberInString);

console.table([numberInString, numberInStringConvertedToNumber, typeof numberInString, typeof numberInStringConvertedToNumber]);

// converting invalid number string to number
let invalidNumberInString = "69xxx";
let invalidNumberInStringConvertedToNumber = Number(invalidNumberInString);

console.table([invalidNumberInString, invalidNumberInStringConvertedToNumber, typeof invalidNumberInString, typeof invalidNumberInStringConvertedToNumber]);

// converting number to boolean
let booleanNumber = 1;
let booleanNumberConvertedToBoolean = Boolean(booleanNumber);

console.table([booleanNumber, booleanNumberConvertedToBoolean, typeof booleanNumber, typeof booleanNumberConvertedToBoolean]);