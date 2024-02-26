// mais sobre numbers

// Imprecisão com números decimais
let num1 = 1500.45512;
let num2 = 2.5;

//console.log(num1.toString() + num2);  // Convertendo num1 para string sem alterar o valor original
//num1 = num1.toString();               // Convertendo num1 para string e alterando o valor original

// console.log(num1.toString(2));       // Obtendo a versão binária da variável num1
//console.log(num1.toFixed(2));         // Arredondando o valor de num1 para duas casas decimais
//console.log(Number.isInteger(num1));  // Verificando se num1 é um número inteiro

/*
// Convertendo explicitamente a string em número e verificando se é NaN
let temp = num1 * 'ola';
console.log(Number.isNaN(temp)); // verificando se é uma conta inválida
*/

// Padrão IEEE 754-2008 para precisão com contas abaixo de zero
let num3 = 0.7;
let num4 = 0.1;

// Solução 1: Uso de parseFloat e toFixed para ajustar imprecisões
/*
num3 += num4; // 0.8
num3 += num4; // 0.9
num3 += num4; // 1.8

num3 += parseFloat(num3.toFixed(2)); // ou Number(num3.toFixed(2))
*/

// Solução 2: Multiplicação e divisão para ajustar imprecisões
num3 = ((num3 * 100) + (num4 * 100)) / 100; // 0.8
num3 = ((num3 * 100) + (num4 * 100)) / 100; // 0.9
num3 = ((num3 * 100) + (num4 * 100)) / 100; // 1.0

console.log(num3); 
console.log(Number.isInteger(num3));

/*  OBS: 
    Ao usar números decimais em JS, observe a imprecisão devido ao padrão IEEE 754-2008. Isso pode resultar em pequenos desvios em cálculos. 
    Considere estratégias de arredondamento para mitigar impactos.
*/