// check Array [] is empty 
let userEmail = [];

if (userEmail) {
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}

// falsy values = 0, -0, false, BigInt 0n, "", null, undefined, NaN 
// truthy values = "0", " ", "false", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is Empty");
    
}

// check object {} is empty 
const objEmpty = {}
if (Object.keys(objEmpty).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing operator (??): null, undefined 
let val1;
// val1 = 10 ?? 15;
// val1 = null ?? 20;
// val1 = undefined ?? 5;
val1 = null ?? 2 ?? 3;

console.log(val1);

// Terniary operator
const icTeaPrice = 100;
icTeaPrice >= 99 ? console.log("less then 99") : console.log("more then 99");

