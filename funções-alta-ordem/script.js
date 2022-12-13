const list1 = [1, 2, 3, 4];
const list2 = [];
const nomes = ['MARIA', 'JOAO', 'ANABELA'];

function dobro(x){
    return x * 2;
}

function triplo(x){
    return x * 3;
}

function mais_um(x){
    return x + 1;
}
console.log("-------MAP-------")
const m1 = list1.map(dobro);
console.log(m1);
const m2 = list1.map(triplo)
console.log(m2);
const m3 = list1.map(mais_um);
console.log(m3);
const m4 = list1.map(x => x*2);
console.log(m4);

console.log("--------------------------")
//Filter: retorna uma nova coleção contendo apenas
//aqueles elementos da coleção original que
//satisfazem um dado predicado

function par(x){
    return x % 2 == 0;
}

const f1 = list1.filter(par);
const f2 = list1.filter(x => x % 2 ==0);
const f3 = list1.filter(x => x%2 != 0);
const f4 = list1.filter(x => x >2);

console.log("-----------FILTER----------------")
console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);

console.log("--------------------------------")
//reduce: aplica cumulativamente uma função aos elementos de
//uma coleção, retornando o resultado final cumulativo.
//* voce pode informar, opcionalmente, um valor inicial como
//parâmetro (necessário para coleção vazia).

function soma(x, y){
    return x + y;
}

function produto(x,y){
    return x * y;
}


const r1 = list1.reduce(soma);
const r2 = list1.reduce((x,y) =>  x + y);
const r3 = list2.reduce(soma, 0); //lista vazia
const r4 = list1.reduce(produto);
const r5 = list2.reduce(produto, 1); //elementro neutro de multiplicação é 1;

console.log("---------REDUCE----------")
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);

// ------------------------------------------------------------
// sort: ordena a coleção conforme a função de comparação
// informada como parâmetro

function compararPorTamanho(s1, s2){
    return s1.length - s2.length;
}

console.log("SORT ----------------");

const s1 = [...nomes].sort();
console.log(s1);

const s2 = [...nomes].sort(compararPorTamanho);
console.log(s2);

const s3 = [...nomes].sort((x,y) => x.length - y.length);
console.log(s3);



console.log(nomes);