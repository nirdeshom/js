// stack (Primitive)

let youTubeName = "Nir Java Coder";

let anotherYoutube = youTubeName;
anotherYoutube = "NirCode Camp";

console.log(youTubeName);
console.log(anotherYoutube);

// Heap (Non Primitive)

// object
let user = {
  name: "Nirdesh Kumar",
  age: 21,
  course: "Web Development",
  fees: 199,
};

let userTwo = user;
userTwo.fees = 499;

console.log(user);
console.log(userTwo);

// Only Value Access Object
console.log(user.fees);
console.log(userTwo.fees);

// Array
let hero_name = ["Nirdesh", "Saktiman", "MunaBhaiya"];

let change_hero = hero_name;
change_hero[1] = "Deepak";

console.log(hero_name);
console.log(change_hero);
