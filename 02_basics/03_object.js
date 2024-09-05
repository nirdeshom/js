// singleton
// Object.create

// object literals

let mySymbol = Symbol("keys");

let user = {
  name: "nirdesh",
  "full name": "nirdesh kumar",
  [mySymbol]: "key value",
  age: 21,
  email: "nirdesh@gmail.com",
  isLoggedIn: false,
  location: "lakhimpur",
  lastLoginDays: ["Monday", "Saturday"],
};

// access value
// console.log(user.name);
// console.log(user["full name"]);
// console.log(user["email"]);
// console.log(user[mySymbol]);
// console.log(user);

// change value
user.email = "om@gmail.com";
console.log(user);

/* 
The object has become frozen.
Before freezing: new properties may be added,
and existing properties may be changed or removed
*/

// Object.freeze(user);
user.email = "nir@microfoft.in";
console.log(user);

user.one = function(){
    console.log("Hello JS User");
}
user.two = function(){
    console.log(`Hello JS User ${this["full name"]}`);
}
user.three = function(addName){
    console.log(`Hello JS User ${addName}`);
}
console.log(user.one());
console.log(user.two());
console.log(user.three("Love Verma"));
