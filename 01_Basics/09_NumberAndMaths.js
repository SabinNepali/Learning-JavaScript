/**************NUMBERS********************/

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 69.6969;
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


/**************MATHS*********************/
console.log(Math);
console.log(Math.abs(-69));
console.log(Math.round(6.9));
console.log(Math.ceil(6.9));
console.log(Math.floor(6.9));
console.log(Math.sqrt(144));
console.log(Math.min(3,6,7,4,5));
console.log(Math.max(3,6,7,4,5));

console.log(Math.random());
console.log(Math.floor((Math.random()*10)) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);