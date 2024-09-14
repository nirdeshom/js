// forEach loop 

let programming = ["js", "java", "python", "c++"];

programming.forEach( function (itam){
    // console.log(itam);
} )

programming.forEach( (value) => {
    // console.log(value);
} )

function printMe(itam){
    console.log(itam);  
}
// programming.forEach(printMe)

programming.forEach( (values, index, arraylist) => {
    console.log(values, index, arraylist);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]

myCoding.forEach( (itam) => {
    // console.log(itam)
    console.log(itam.languageFileName)
} )

