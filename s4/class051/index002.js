// Funções que Retornam Funções (Closures)

// Exemplo 1: Função que retorna uma função
function falaFrase(comeco){
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('Mundo!');

console.log(resto);

// Exemplo 2: Função que retorna uma função multiplicadora
function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));        // Saída: 4
console.log(triplica(2));       // Saída: 6
console.log(quadriplica(2));    // Saída: 8

/*
Quando você chama criaMultiplicador(2), ela retorna uma função interna. 
Esta função interna, mesmo após a execução da função externa criaMultiplicador, 
ainda mantém uma referência ao escopo no qual foi criada. No caso, ela tem uma 
referência ao parâmetro multiplicador que foi passado no momento da criação da função.

Isso é o que chamamos de "closure" em JS - a capacidade de uma função interna acessar 
variáveis ​​de sua função externa, mesmo após a função externa ter sido concluída. 
O escopo interno (com as variáveis locais e parâmetros) é preservado.

Então, quando você chama duplica(2), a função interna ainda se lembra do 
multiplicador sendo 2, e assim por diante para as outras funções criadas. 
É uma maneira poderosa de manter estado e reutilizar lógica em JS.
*/