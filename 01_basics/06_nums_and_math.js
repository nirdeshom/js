// number 

let score = 100;
console.log(score);

let balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const bestNumbers = 199.89;
console.log(bestNumbers.toPrecision(4));

const largeNum = 1000000
console.log(largeNum.toLocaleString('en-IN'));

// Math
console.log(Math);
// console.log(Math.abs(-234));
// console.log(Math.round(1.6));
// console.log(Math.min(4, 2, 4, 5, 6, 7));
// console.log(Math.max(4, 2, 4, 5, 6, 7));
// console.log(Math.ceil(1.2));
// console.log(Math.floor(4.9));


console.log(Math.random());  // 0-1
console.log((Math.random() * 10) + 1);  // remove 0 but 0-10
console.log(Math.floor(Math.random() * 10) + 1);  // remove 0 and 1-10

const min = 20
const max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min)