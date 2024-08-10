const Heros = ["Ironman", "Loki", "Captain America"]
const villains = ["Hydra", "Thanos", "Kang"]

// Heros.push(villains)
// console.log(Heros);
// console.log(Heros[3][1]);

// const allCharacters = Heros.concat(villains)
// console.log(allCharacters);
// const everyone = [...Heros, ...villains]
// console.log(everyone);

const hula = [1, 2, 3, [4, 5], 6, 7, [8, 9, [6, 7, 8]]]
const hoop = hula.flat(Infinity)

// console.log(hoop);


console.log(Array.isArray("Saniya"))
console.log(Array.from("Saniya"))
console.log(Array.from({name : "Saniya"}))

let score = 100
let point = 200
let marks = 300

console.log(Array.of(score, point, marks));
