// Primitive
// 7 type : String, Number, BigInt, Boolean, null, undefined, Symbol

const score = 9550;
const scoreValue = 100.5
const BestNumber = 26475339776573n;

const name = "nirdesh";
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol(123);
const anotherId = Symbol(123);
console.log(id === anotherId);  // output: false
console.log(typeof id);  // typeof: symbol



// Reference (Non Promitive)
// Array, Object, function

const heros_name = ["nirdesh", "omjeet", "vimal"];
console.log(heros_name);

const myObjects = {
    name: "nirdesh",
    age: 21,
    branch: "Information Technology",
    semester: "6th",
};
console.log(myObjects);

const myFunctions = function(){
    console.log("Hello Nirdesh");
    
};

console.log(typeof (heros_name));  // typeof: object
console.log(typeof (myObjects));  // typeof: object
console.log(typeof (myFunctions));  // typeof: function