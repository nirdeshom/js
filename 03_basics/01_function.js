function myFunction(){
    console.log("Hello My Function Excution");
}
// myFunction()

// function addToNumber(number1, number2){
//     console.log(number1 + number2);
    
// }

function addToNumber(number1, number2){
    // let result = number1 + number2;
    // console.log(result);
    // return result;

    return number1 + number2;
}
let restlt1 = addToNumber(2, 2);
// console.log("Result:", restlt1);

// if(!userName) 
function userLoggedIn(userName){
    if(userName === undefined){
        return `user Invalid`;
    }
    return `user logged In by ${userName}`;
}
// console.log(userLoggedIn());
// console.log(userLoggedIn("Nirdesh"));

function calculateCardPrice(...num1){
    return num1;
}
console.log(calculateCardPrice(100, 200, 400, 800));

const user = {
    username: "nirdesh",
    price: 99,
}
function handleObject(anyobject){
    console.log(`user is ${anyobject.username} and price ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "omjeet",
    price: 199,
})

const myNewArray = [100, 200, 300, 400, 500];
function returnSecondValue(getArray){
    return getArray[0]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10, 20, 30, 40]));

