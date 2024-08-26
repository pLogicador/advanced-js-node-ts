// Funções que Retornam Funções (Closures)

/*
A closure is an inner function that "remembers" the environment in which it was created, even after the outer function has 
finished executing. This means the inner function can access variables from the outer function, preserving the 
state even when the outer function is completed.

- Example 1: The createPhrase function returns an inner function that takes an end argument and concatenates it with the 
start argument from the outer function. When you call greet('Mundo!'), the inner function still remembers the 
start value being 'Olá', resulting in 'Olá Mundo!'.

- Example 2: The createMultiplier function returns a function that performs multiplication. For example, 
double(2) returns 4 because the function still remembers the multiplier was 2. 
This allows you to create reusable functions with specific logic.

Closures are extremely powerful for encapsulating logic and creating functions that retain state between calls.
*/

// Exemplo 1: Função que retorna uma função
function createPhrase(start) {
    return function(end) {
        return `${start} ${end}`;
    };
}

const greet = createPhrase('Olá');
const result = greet('Mundo!');

console.log(result);  // Output: Olá Mundo!

// Exemplo 2: Função que retorna uma função multiplicadora
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(2));       // Output: 4
console.log(triple(2));       // Output: 6
console.log(quadruple(2));    // Output: 8
