const tinder = {}

// console.log(tinder);

tinder.id = "123abc"
tinder.name = "Tony"
tinder.isLoggedIn = "False"

// console.log(tinder);

const regularUser = {
    email : "xyz@gmail.com",    
    name : {
        username : {
            firstname : "Saniya",
            lastname : "Nayak"
        }
    }
}

// console.log(regularUser.name.username.lastname);

const objectOne = {1: "a", 2: "b"}
const objectTwo = {3: "c", 4: "d"}
const objectFour = {5: "e", 6: "f"}

// const objectThree = {objectOne, objectTwo}

// const objectThree = Object.assign({}, objectOne, objectTwo, objectFour) //{} is target and later values are source.
// console.log(objectThree);

// const objectThree = {...objectOne, ...objectTwo}
// console.log(objectThree);

const user1 = [
    {
        id : 1,
        email : "zzz@gmail.com"
    },

    {
        id : 1,
        email : "yyy@gmail.com"
    },

    {
        id : 2,
        email : "ccc@gmail.com"
    },
]

// console.log(user1[1]);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty('email'));


    const course = {
        name : "javascript",
        email : "xyz@gmail.com",
        price : "1000",
    }

const {name : xyz} = course  //changes name of value
console.log(xyz);

[
    {},
    {},
    {}
]