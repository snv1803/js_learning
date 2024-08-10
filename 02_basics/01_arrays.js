//***Array***

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Ironman", "Loki"]


// const myArr2 = new Array(0, 1, 2, 3, 4)
// console.log(myArr[1]);


//***Array Methods***

// myArr.push(6)     //can push any value by using push
// myArr.pop()       //removes last value
// console.log(myArr);

// myArr.unshift(0)
// console.log(myArr);
// myArr.shift()

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//***Slice, Splice***

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);