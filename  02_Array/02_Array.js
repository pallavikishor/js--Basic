const marval_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marval_heros.push(dc_heros)

console.log(marval_heros);
console.log(marval_heros[3][1]);

const heros = marval_heros.concat(dc_heros)
console.log(heros);



// **********SPREAD************
const all_heros = [...marval_heros, ...dc_heros]
console.log(all_heros);


const another = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real = another.flat(Infinity)
console.log(real);


console.log(Array.isArray("pallavi"))
console.log(Array.from("pallavi"));
console.log(Array.from({name: "pallavi"}));//Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
