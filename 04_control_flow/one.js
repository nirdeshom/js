// if 

// syntex 
// if (condition) {
//     code
// }

// Executes a block of code if a specified condition is true.
if (true) {
    console.log("Executed Code.");
    
}

// Executes a block of code if the same condition of the preceding if statement is false.
if (false) {
    console.log("one.");

} else {
    console.log("two");
    
}
// <, >, >=, <=, !=, ==, ===

let temp = 20;
if (temp === 30) {
    console.log("temp equal");
    
} else {
    console.log("temp not equal");
    
}

// Nested if-else Statement
let score = 1000;
if (score < 500) {
    console.log("less then 500");
    
} else if(score < 700){
    console.log("less then 700");
    
} else if (score < 900) {
    console.log("less then 900");
    
} else {
    console.log("less then 1200");
    
}

const userLoggedIn = true;
const debitCard = true;
const loginFromEmail = false;
const loginFromGoogle = true;

// all condition true 
if (userLoggedIn && debitCard && loginFromGoogle) {
    console.log("buy js course");
    
} else {
    console.log("not buy course");
    
}

// only one condition true 
if (loginFromEmail || loginFromGoogle) {
    console.log("Access Data");
    
} else {
    console.log(" Not Access Data");
    
}