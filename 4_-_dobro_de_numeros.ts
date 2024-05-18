//Dado o seguinte array de números em TypeScript, escreva um código que use a função map 
//para criar um novo array onde cada número é multiplicado por 2.
//const numeros: number[] = [1, 2, 3, 4, 5];

const numeros: number[] = [1, 2, 3, 4, 5];
const dobroNumeros:number[] = numeros.map(numeros => numeros * 2)
console.log(dobroNumeros)

