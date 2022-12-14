const cep = '01001000';

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

async function getJsonResponse(url){
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
}
//retorna promise e temos que usar o then:
//console.log função sincrona e não imprime assincrona

//getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
//  .then(result => {
//   console.log(result);
//   })

async function showCepData(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json = await getJsonResponse(url);
    console.log(json);
}

showCepData(cep);

console.log("A");
console.log("B");