// TAMANHO ARRAY

const valores = ["Maria", 37, false, 1.64];
const t1 = valores.length;

console.log("Teste lenght");
console.log(t1);

//REMOVER ELEMENTOS

const nomes = ["Maria", "João", "Ana", "Marcos"];
const r1 = nomes.pop();
const r2 = nomes.shift();

console.log("Teste pop")
console.log(r1)
console.log(r2)

console.log(nomes)


//INSERIR ELEMENTOS

const alturas = [1.65, 1.82, 1.7];
alturas.push(1.75);
alturas.unshift(1.58);

console.log("Teste push e unshift")
console.log(alturas)

//INSERIR E REMOVER GERAL

const  letras = [
    "A", "B", "C", "D", "E", "F"
]

letras.splice(2, 3,"X", "Y")

console.log("TEste Splice")
console.log(letras)




//CONCATENAR ARRAYS

const meninas = ["Maria", "Ana"];
const meninos = ["João", "Marcos"];

const todos = meninas.concat(meninos);

console.log("teste Concat");
console.log(todos);

// ACESSO E ATRIBUIÇÃO

const idades = [
    [20, 30, 40, 50]
];

idades[1] = 38;

console.log("teste acesso e atribuição");
console.log(idades);

//PERCORRER UM ARRAY

const frutas = [
    "Banana", "Laranja", "Uva"
];

console.log("Teste Percorrer Array");
    for (let i = 0; i < frutas.length; i++){
        console.log(frutas[i]);
    }
//PERCORRER ARRAY COM FOR EACH
console.log("Percorrer array com o for each")
frutas.forEach( item=> {
    console.log(item);
    });