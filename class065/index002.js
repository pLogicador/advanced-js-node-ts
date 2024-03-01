// Testes com a função filter 'numerosFiltrados'
// Retorne os números maiores que 10
const numeros = [5, 50, 2, 0, 80, 11, 6, 5, 4, 10, 101, 84];

const numerosFiltrados = numeros.filter((valor, indice, array) => {
    /*
    A função de callback do método `filter` pode receber até três parâmetros:
    - valor: o elemento atual sendo processado no array.
    - indice: o índice do elemento atual no array.
    - array: o array original ao qual a função filter foi chamada.

    Estes parâmetros são úteis para obter mais informações sobre o contexto atual durante a execução da função de callback.
    */

    console.log(valor, indice, array);

    // Se desejar filtrar números maiores que 10, a condição apropriada pode ser aplicada.
    // return valor > 10;
});