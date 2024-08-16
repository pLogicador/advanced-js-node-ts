// Objeto Math
/*
Método: Uma função que pertence a um objeto. Em JS, chamamos essas funções associadas a objetos de métodos.
    Sintaxe: 
objeto.método(parâmetros)
*/
let testFirstnumber = 10.50;

// Arredondamento:
let roundedDown = Math.floor(testFirstnumber);  // Arredonda para baixo
let roundedUp = Math.ceil(testFirstnumber);  // Arredonda para cima
let rounded = Math.round(testFirstnumber);  // Arredonda para o inteiro mais próximo ou para cima em caso de empate

console.log(roundedDown);
console.log(roundedUp);
console.log(rounded);

// Maior e Menor Valor:
console.log(Math.max(1,2,3,4,-9,-10,55,99,80,75)); // Retorna o maior valor
console.log(Math.min(1,2,3,4,-9,-10,55,99,80,75)); // Retorna o menor valor


// Número Aleatório:
let randomValue = Math.round(Math.random() * (10 - 5)+5); // Gera um número aleatório entre 5 e 10
console.log(randomValue);

// Constantes e Operações:
console.log(Math.PI); // Valor de π (pi)
console.log(Math.pow(10, 2));   // Eleva 10 à potência de 2
console.log(10 ** 2);           // Notação simplificada para a mesma operação

// Raiz Quadrada:
let fourthAssessment = 9;
console.log(fourthAssessment ** (1/2)); // Calcula a raiz quadrada de 9
console.log(fourthAssessment ** 0.5);   // Notação simplificada para a mesma operação
console.log(Math.sqrt(fourthAssessment));

// Divisão por Zero:
console.log(100/0);     // Retorna Infinity (cuidado ao dividir por zero)
console.log(!!(100/0)); // Retorna true (Infinity é tratado como um valor truthy)