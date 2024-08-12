function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("Y");
    console.log("A");
}

// function addTwoNumbers (num1, num2){
//     console.log(num1 + num2);   
// }

function addTwoNumbers (num1, num2){
    // let result = num1 + num2 
    // return result
    
    return num1 + num2
}

// const  result = addTwoNumbers(3, 5)

// console.log("Result:", result);

function loginUser(username){

    if (username === undefined) {
        console.log("Enter Username");
        
    }

    return `${username} just logged In`
}

// console.log(loginUser())

function calculateCartPrize(...num1){
    return num1
}

// console.log(calculateCartPrize(200, 400, 700))

const user = {
    username : "Saniya",
    prize : 999
}

function handleObjects (anyObject) {
    console.log(`Username is ${anyObject.username} and Prize is ${anyObject.prize}`);
    
}

// handleObjects(user)

const array = [100, 200, 300, 400]

function returnSecondValue(getArray) {
    return getArray[3]
}

console.log(returnSecondValue(array));