// Array

let arr = [1, 2, 3, 4, 5, 6];
let myArray = ["nirdesh", "hitesh", "deepak", "santosh"];

let myArray2 = new Array(1, 2, 3, 4, 5);
// console.log(myArray2);
console.log(myArray[1]);

// Array Methods
// myArray.push("Omjeet")
// myArray.pop()
// myArray.pop()

// myArray.unshift("Omjeet")
// myArray.shift()

console.log(myArray);

console.log(myArray.includes("nirdesh"));
console.log(myArray.indexOf("hitesh"));

// slice, splice
const bestNum = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("A", bestNum);
console.log(bestNum.slice(1, 3));
console.log("B", bestNum);

console.log(bestNum.splice(1, 3));
console.log("C", bestNum);
