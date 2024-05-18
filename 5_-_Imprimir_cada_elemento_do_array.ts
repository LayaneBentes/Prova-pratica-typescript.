//Dado o seguinte array em TypeScript, escreva um código que imprima cada item do array.


const pessoa = [ { nome: "João", idade: 25, endereco: "Rua das Flores, 123" }, 
{ nome: "Maria", idade: 30, endereco: "Avenida do Sol, 456" },
 { nome: "Pedro", idade: 35, endereco: "Travessa da Lua, 789" }];

pessoa.forEach((item) => {
    console.log(item.nome)
    console.log(item.idade)
    console.log(item.endereco)
    
});



