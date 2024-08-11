// const tinder = {}

// console.log(tinder);

// tinder.id = "123abc"
// tinder.name = "Tony"
// tinder.isLoggedIn = "False"

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

const objectThree = Object.assign({}, objectOne, objectTwo, objectFour) //{} is target and later values are source.
console.log(objectThree);