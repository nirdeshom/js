// map 

let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums = myNum.map( (num) => num + 1);
let newNums = myNum
            .map((num) => num + 1)
            .map( (num) => num * 5)
            // .map( (num) => num >= 40)
            .filter( (num) => num >= 40)
            .filter( (num) => num >= 40 && num <= 50)
console.log(newNums);
