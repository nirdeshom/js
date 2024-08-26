let name = "nirdesh";
let youTube = "chai aur code";
let repoCount = 5;

// console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo count ${repoCount}`);

const myName = new String("Nirdesh");

console.log(myName.__proto__); // output: {}

console.log(myName.length);
console.log(myName[0]);
console.log(myName.charAt(2));
console.log(myName.indexOf("s"));
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

const newString = myName.substring(0, 4); // last value not include
console.log(newString);

const anotherString = myName.slice(-6, 4);
console.log(anotherString);

const newStringOne = "   nirdesh   ";
console.log(newStringOne);
// use trim(), trimStart(), trimEnd()
console.log(newStringOne.trim()); // remove white space and line terminators

const url = "https://nirdesh.com/nirdesh%20kumar";
console.log(url.replace("%20", "-"));
console.log(url.includes("nirdesh"));

// String convert to Array
const strArr = "nirdesh-kumar-verma";
console.log(strArr.split("-"));

let myStr = "hello this is boy";
let finds = "boy";
let x = myStr.indexOf(finds);
console.log(x);

// create html and js file than use
// const content = "Hello My name is Nirdesh Verma";

// document.body.innerHTML = content.blink();
// document.body.innerHTML = content.toUpperCase();
// document.body.innerHTML = content.bold();
// document.body.innerHTML = content.fontcolor("red");
// document.body.innerHTML = content.fontsize(10)

// string study link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/blink
