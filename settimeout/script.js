function dizerOlá(){
    console.log("Olá!");
}

//setTimeout(dizerOlá, 2000);

function dizerBomDia (nome){
    console.log("Bom dia " + nome);
}
setTimeout(() => {
    dizerBomDia("Maria");
    setTimeout(() => {
        dizerBomDia("João");
        setTimeout(()=>{
            dizerBomDia("Ana");
        }, 2000)
    },2000)
}, 2000);

console.log("A");
console.log("B");