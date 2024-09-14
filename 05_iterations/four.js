// for in loop 

const myObject = {
    js: "javascript",
    py: "python",
    cpp: "c++",
    rb: "ruby",
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

let programming = ["js", "java", "python", "c++"];
for (const key in programming) {
    // console.log(key)  // access key in array
    console.log(programming[key])  // access value in array
}
