let user = {
    name: "nirdesh",
    chennal: "Chai Aur Code",
    Message: function(){
        console.log(`${this.name}, and channal ${this.chennal}`);
        console.log(this);
    }
}
// user.Message()
// user.name = "Omjeet";
// user.Message()
// console.log(this);

// function ke andar this 
function code(){
    let name = "nirdesh";
    console.log(this);
    // console.log(this.name);
    
}
// code()
// console.log(code());


let myFun = function(){
    let name  = "nirdeh";
    console.log(this.name);
}
// myFun()
// console.log(myFun());

// Arrow Function 
const chai =  () => {
    let username = "Vimal"
    console.log(this);
}
// chai()

// Curly braces{}, ka use kre ge to return likhna hoga 
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(2, 3));

// const sum = (x, y) => x + y;
const sum = (x, y) => (x + y);
console.log(sum(9, 8));

const name = () => ({user: "nirdesh"})
console.log(name())
