const cep = '01001000';

const fethResult = fetch(`https://viacep.com.br/ws/01001000/json/`);
console.log(fethResult);

fethResult
    .then(response => {
        console.log("SUCESSO NO FETCH");
        const json = response.json();
        json
            .then(result => {
                console.log("SUCESSO NO JSON", result);
            })
            .catch(error =>{
                console.log("ERRO NO JSON", error);
            });
    })
    .catch(error => {
        console.log("ERRO NO FETCH", error);

    });


console.log("A");
console.log("B");

