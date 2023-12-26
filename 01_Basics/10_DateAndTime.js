/***********************DATES*************************/

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(typeof myDate);


let myCreatedDate = new Date(2023,0,23);        // Month starts from 0 in Js.
console.log(myCreatedDate.toDateString());

let dateWithTime = new Date(2023, 0, 12, 13, 3);    // Including time in date 
console.log(dateWithTime.toLocaleString());

let newDate = new Date("2023-01-14");   
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

let newTarik = new Date();
console.log(newTarik);
console.log(newTarik.getMonth() + 1);
console.log(newTarik.getDay());

console.log(newTarik.toLocaleString('default',{
    weekday: "long",
    day: "2-digit" 
}));




