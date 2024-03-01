// Filter (filtrando o array)
/*
O método `filter` é usado para filtrar os elementos de um array com base em uma condição fornecida por uma função callback. 
Ele sempre retornará um novo array, mantendo a mesma quantidade de elementos ou menos, dependendo da condição.

Exemplo:
Retorne os números maiores que 10.
*/
const numeros = [5, 50, 2, 0, 80, 11, 6, 5, 4, 10, 101, 84];

/*
Versão 0.1
function callbackFilter(valor){ 
    // Retorna a própria condição avaliada como verdadeira ou falsa.
    return (valor > 10);
}

const numerosFiltrados = numeros.filter(callbackFilter);
*/

/*
Versão 0.2
const numerosFiltrados = numeros.filter((valor) => {
    return valor > 10;
});
*/

/*
Versão 0.3
// Quando há apenas um parâmetro de função, podemos remover os parênteses.
const numerosFiltrados = numeros.filter(valor => valor > 10);
*/

// Versão 0.4
// Quando há apenas uma linha de bloco, podemos simplificar ainda mais, removendo chaves e a palavra 'return'.
const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados);
