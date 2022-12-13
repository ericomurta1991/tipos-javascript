//função normal:
function soma(num1, num2){
    return num1 + num2;
}

//segunda forma
const soma2 = function (num1, num2){
    return num1 + num2;
}

//arrow function

const soma3 = (num1, num2) => {
    return num1 + num2
}

//arrow function sem {}

const soma4 = (num1, num2) => num1 + num2;

const dobro = function(num){
    return num * 2;
}

const dobro2 = num => num * 2;

//função que não tem um retorno definido, por padrão ela retorna undefinied

function mostrarPreco(preco){
    console.log("Preço =" + preco);
}

//variaveis definidas dentro do escopo da função não vazam escopo

function aeraCirculo(raio){
    var pi = 3.14;
    return pi * raio * raio;
    //usar var não vaza escopo da funçãp, somente em estruturas de controle.
}

//function hoisting: funções no JS são "movidas" para cima pelo javascript

teste(10);

function teste(x){
    console.log("TESTE = " + x);
}

//Funções podem ser passadas como argumento

function triplo(num){
    return num * 3;
}

function aplicar(f, num){
    const result = f(num);
    console.log("RESULTADO = " + result);
}

aplicar(triplo, 10);
aplicar(dobro, 10);

