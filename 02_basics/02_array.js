const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

let allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);

// The spread [...variable1, ...variable2] syntax allows an iterable, such as an array or string
let all_new_hero = [...marvel_heros, ...dc_heros];
console.log(all_new_hero);

const another_heros = [1, 2, 3, 4, 5, [6, 7, 8, [9, 1, 2]]];
console.log(another_heros.flat(Infinity));

console.log(Array.isArray("nirdesh"));
console.log(Array.from("nirdesh"));
console.log(Array.from("nirdesh kumar"));
console.log(Array.from({ name: "nirdesh" })); // interesting

// convert array
let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1, score2, score3, score4));
