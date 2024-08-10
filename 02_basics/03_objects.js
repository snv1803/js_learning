//***Singleton***

//object literals
// Object.create
const sym = Symbol("Key")

const userOne = {
    name : "Saniya",
    [sym] : "Key",
    city : "Gandhinagar",
    email: "xyz@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Thursday", "Friday"]
}

// console.log(userOne.email);
// console.log(userOne["email"]);
// console.log(userOne[sym]);

// userOne.email = "abc@gmail.com"
// console.log(userOne.email);

// Object.freeze(userOne)  //to freeze values means no changes apply

// userOne.email = "a23456c@gmail.com"
// console.log(userOne.email);

userOne.greeting = function(){
    console.log("Good Morning Ms.Saniya");   
}

userOne.greetinga = function(){
    console.log(`Good Morning Ms.Saniya, ${this.email}`);   
}

console.log(userOne.greeting());
console.log(userOne.greetinga());