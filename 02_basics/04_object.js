// Create Object 

// let userOne = new Object();
let userOne = {}

// add value in userOne
userOne.name = "Nirdesh Kumar";
userOne.age = 21;
userOne.email = "nir@gmail.com";
// console.log(userOne);

let jsUser = {
    id: 1234,
    email: "nir@gmail.com",
    fullName: {
        UserFullName: {
            firstName: "Omjeet",
            lastName: "Verma",
        }
    }    
}
console.log(jsUser);
console.log(jsUser.fullName.UserFullName.firstName);

// Object.assign()
let obj1 = {1: "a", 2: "b"};
let obj2 = {3: "a", 4: "b"};
let obj3 = {5: "a", 6: "b"};

// let assignObj = {obj1, obj2, obj3};
// let assignObj = Object.assign({}, obj1, obj2, obj3);

let assignObj = {...obj1, ...obj2, ...obj3}
console.log(assignObj);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(userOne);

console.log(Object.keys(userOne));
console.log(Object.values(userOne));
console.log(Object.entries(userOne));

console.log(userOne.hasOwnProperty('email'));


// Object de-structuring
let course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "nirdesh",
}

// const {courseInstructor} = course;
// console.log(courseInstructor);
const {courseInstructor: Instructor} = course
console.log(Instructor);

// {
//     name: "nirdesh",
//     cousename: "js",
//     price: "free"
// }

[
    {},
    {},
    {}
]

