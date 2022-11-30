const a = 10
const b = 10.5
const c = 'Maria'
const d = 'a'
const e = false
const f = {name: 'Maria', age: 25}
const g = ['a', 15, false, 'maria']
const h = null
const i = undefined


console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)
console.log(typeof h)
console.log(typeof i)


const x = 10

if (x > 0) {
    var j = 100;
    // usar var vaza escopo pra fora da estrutura de controle
    let l = 200;
    const m = 300;
    console.log("Imprimindo dentro do if: ")
    console.log(j);
    console.log(l);
    console.log(m);
}

console.log("Imprimindo fora do if: ")
console.log(j);
//console.log(l);
//console.log(m);

console.log("Imprimindo resultado do for: ");
for (let i = 0; i < 5 ; i++) {
    console.log(i)
}