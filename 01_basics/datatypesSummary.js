// ***Primitive Datatypes***

// There are 7 categories : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.7

// const  isLoggedIn = false
// const outsideTemp = null

// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id == anotherId);

// const bigNumber = 1234567890n //n represents bigInt


// ***Non-Primitive Datatype***

// Array, Object, Function

// const marvel = ["Ironman", "Captain America", "Black Widow", "Hawkeye", "Hulk", "Thor"]
// let myObj = {
//     name : "Saniya",
//     age : 20,
// }

// const myFunction = function(){
//     console.log("Saniya");
//     }

// console.log(typeof myFunction);


// *******************
// Stack (Primitive), Heap (Non-Primitive)

// let myName = "Saniya"

// let anotherName = myName
// anotherName = "Lokid"

// console.log(anotherName);
// console.log(myName);

let userOne = {
    email : "xyz@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "abc@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);