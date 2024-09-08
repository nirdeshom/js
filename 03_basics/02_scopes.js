// block scope 

let a = 100;

if (true) {
    const a = 10;
    let b = 20;
    var c = 30;
    // console.log("Inner", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

// Nested scope 
function one(){
    let userName = "nirdesh";
    function two(){
        let website = "youtube";
        // console.log(userName);
    }
    // console.log(website);
    two()
}
one()

if (true) {
    let userName = "nirdesh";
    if (userName === "nirdesh") {
        let website = " youtube";
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

console.log(one(2));
function one(num){
    return num + 1;
}

console.log(two(2));
let two = function (num){
    return num + 2;
}
