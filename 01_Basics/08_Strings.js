// Strings
const name = "Sabin";
const age = 22;

console.log(name + age + " Value"); // this method of string concatenation is outdated

console.log(`Hello my name is ${name} and I am ${age} years old.`); // This is modern

const fullName = new String('Sabin-Nepali');
console.log(fullName);
console.log(fullName[0]);
console.log(fullName.__proto__);

console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.charAt(1));
console.log(fullName.indexOf('S'));

const newString = fullName.substring(0, 5);
console.log(newString);

const anotherString = fullName.slice(0, 4);
console.log(anotherString);

const newStringOne = "       Sabin ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.facebook.com";
console.log(url);
console.log(url.replace('facebook', 'youtube'));
console.log(url.includes('w'));

const nameArr = fullName.split('-');
console.log(nameArr);