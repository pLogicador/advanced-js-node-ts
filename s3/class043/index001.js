/*  Escreva uma função que recebe um número e retorne:
    O número é divisível por 3 = Fizz
    O número é divisível por 5 = Buzz
    O número é divisível por 3 e 5 = FizzBuzz
    O número não é divisível por 3 e 5 = retorna o próprio número
    checar se o número é realmente um número
    utilize a função com números de 0 a 100
*/

const NUMBERS = [10,15,20,5,3,9,13];

function fizzBuzz(number) {

    if (typeof number !== 'number') return NaN;
    if (number%3 === 0 && number%5 === 0) return 'FizzBuzz'; // precisa ficar no topo, por que ?
    if (number%3 === 0) return 'Fizz';
    if (number%5 === 0) return 'Buzz';
    return number;
}

for (let i=0; i<=100; i++) {
    console.log(i, fizzBuzz(i));
}