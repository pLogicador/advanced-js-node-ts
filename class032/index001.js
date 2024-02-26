// Atribuição via desestruturação (Arrays)
/*
let a = 'A';
let b = 'B';
let c = 'C';

// lado esquerdo - atribuição via desestruturação
const letras = [b,c,a];
[a,b,c] = letras;  // reatribuindo a,b,c

console.log(a,b,c);
*/

// ... rest, ... spread

//               0  1  2  3  4       -> indice   
const numeros = [100, 2222, 3250, 4000, 54];   //-> valor
const [firstNumb, secondNumb, ...resto] = numeros;
const [um, ,tres, ,cinco] = numeros; // pulando valores

console.log(firstNumb, secondNumb);
console.log(resto); // o operador '...' pega os valores restantes

console.log(um, tres, cinco);