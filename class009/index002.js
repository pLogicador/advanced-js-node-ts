// Tipos de dados primitivos em JS
// String, Number, Undefined, Null, Boolean, Symnol(explicação no class...)

// String: Representa texto e pode ser delimitada por aspas simples, aspas duplas ou acentos graves (template strings).
const frase = `"Ele disse: 'Olá, mundo!'"`; 

// Number: Representa números inteiros ou de ponto flutuante.
const numeroInteiro = 10;
const numeroDecimal = 12.50;

// Undefined: Indica que uma variável foi declarada, mas ainda não foi atribuída com um valor.
let nomeAluno; // Exemplo de variável declarada, mas ainda não definida (undefined)

// Null: Indica a ausência intencional de valor ou a falta de um objeto.
let sobreNomeAluno = null; // Exemplo de variável que foi intencionalmente definida como nula

// Boolean: Representa valores lógicos - verdadeiro (true) ou falso (false).
const aprovado = true;

/*
    RESUMO:
    - String representa texto.
    - Number representa números.
    - Boolean representa valores lógicos (verdadeiro ou falso).
    - Undefined é usado quando uma variável foi declarada, mas não foi definida.
    - Null é usado quando queremos indicar intencionalmente que uma variável não tem valor.

    OBS:
    - Undefined geralmente acontece quando você declara uma variável, mas não atribui valor a ela.
    - Null é uma escolha consciente do desenvolvedor para indicar ausência de valor.
*/

// Sintaxe de uso da função typeof:
// typeof variavel

console.log(typeof frase);          // Saída: string
console.log(typeof numeroInteiro);  // Saída: number
console.log(typeof(numeroDecimal)); // Saída: number
console.log(typeof frase, frase)                        // Saída: string "Ele disse: 'Olá, mundo!'"
console.log(typeof nomeAluno, nomeAluno);               // Saída: undefined undefined
console.log(typeof(sobreNomeAluno), sobreNomeAluno);    // Saída: object null
console.log(typeof(aprovado), aprovado);                // Saída: boolean true

/*
    OBS:
    - typeof é uma palavra-chave do JS.
    - Ela retorna uma string representando o tipo da variável.
    - Pode ser usado em variáveis não declaradas, retornando "undefined".
    - Para null, typeof retorna "object" (é uma peculiaridade histórica da linguagem MAS É UM BUG).

    Formas de uso:
    - typeof variavel
    - typeof(variavel)
*/