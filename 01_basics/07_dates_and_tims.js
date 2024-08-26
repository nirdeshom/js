// Date
let myDate =  new Date();
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);  // typeof: object
// console.log(myDate.toJSON());

// let myCreateDate = new Date(2024, 0, 1)  // month start 0
// let myCreateDate = new Date(2024, 0, 1, 5, 1)

let myCreateDate = new Date("2024-01-26")
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
