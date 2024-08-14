let a = 300

if (true) {
    let a = 10
    const b = 20
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "Saniya"

    function two () {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    // two()   
}

// one()


if (true) {
    const username = "Saniya"
    if (username === "Saniya") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);   
}

// console.log(username);

console.log(addOne(5))

function addOne (num) {
    return num + 1
}

const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5))