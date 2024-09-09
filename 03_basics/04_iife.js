// Immediately Invoked Function Expressions (IIFE)

// named iife 
(function om(){
    console.log("Named IIFE")

})();


// Arrow IIFE 
((name) => {
    console.log(`hello iife ${name}`)
})("nirdesh");



// (function chai(){
//     console.log("named iife");
// })();

// ((name) => {
//     console.log(name);
// })("nir")