// reduce 

let myNum = [1, 2, 3];

let myTotal = myNum.reduce( function(acc, currvalue) {
    console.log(`acc ${acc} and cuu value ${currvalue}`);
    return acc + currvalue;
}, 0)

// myTotal = myNum.reduce ( (acc, currvalue) => acc + currvalue, 0)
console.log(myTotal);

const shopingCard = [
    {
        course: "Web Development",
        price: 99,
    },
    {
        course: "App Development",
        price: 199,
    },
    {
        course: "JavaScript Development",
        price: 299,
    },
]

const total = shopingCard.reduce( (acc, itam) => acc + itam.price, 0);
console.log(total);
