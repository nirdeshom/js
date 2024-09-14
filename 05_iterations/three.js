// for of loop 

// ["", "", "", ""]
// [{}, {}, {}, {}]

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (const num of arr) {
    console.log(num);
}

let greeting = "nirdesh kumar";
for (const greet of greeting) {
    if (greet == "s") {
        console.log(`name best speling: ${greet}`)
        break;
    }
    console.log(`Each char is ${greet}`)
} 

// Map

// Values ​​can be added to the map from map.set, but the value of the same key cannot be added.
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of India")
map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map);

for(const key of map){
    // console.log(key); 
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

let myObject = {
    game1: "NFS",
    game2: "spiderman",
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);  // TypeError: myObject is not iterable
// }

