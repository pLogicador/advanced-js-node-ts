// Parâmetros da função
/*
    Ao utilizar 'function' ou 'function expression', uma variável 'arguments' é 
    automaticamente criada por padrão em uma função sem parâmetros. 
    Essa variável 'arguments' sustenta todos os argumentos enviados para a função.
*/

// Exemplo 1: Função com 'arguments'
function funcao() {
    console.log('hey');
    console.log(arguments[0]); // A variável 'arguments' contém todos os argumentos passados para a função
}

funcao('Epa', 1,2,3,4,5);   // JS não gera um erro, mesmo com um número diferente de parâmetros

// Exemplo 2: Função de soma com 'arguments'
function soma() {
    let total = 0;

    for(let a of arguments) {
        total += a;
    }
    console.log(total);
}

soma(5,5); // Saída: 10

// Exemplo 3: Função com parâmetros definidos
function funcao2(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f)
}
funcao2(1,2,3); // JS atribui automaticamente 'undefined' para os parâmetros ausentes

// Exemplo 4: Função com valor padrão para parâmetro
function soma2(a,b = 5) {
     // Alternativa ao valor padrão usando operador lógico: b = b || 5; (método ultrapassado)
    console.log(a + b)
}
soma2(5);   // Se o segundo argumento não for enviado, o valor padrão (5) é utilizado

// Exemplo 5: Função com múltiplos parâmetros e valores padrão
function soma3(a,b = 5, c=4) {
    console.log(a + b + c)
}
soma3(5, undefined, 10);
// Ao pular um parâmetro e passar 'undefined', a função assume o valor padrão para esse parâmetro