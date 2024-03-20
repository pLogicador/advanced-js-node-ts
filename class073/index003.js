// Métodos úteis para objetos
// Object values e entries
/***
*  Em JS, os métodos Object.values() e Object.entries() são utilizados para obter informações
 * sobre os valores e entradas (chave-valor) de um objeto, respectivamente.
 * 
 * Object.values
 * Object.entries
 * Object.assign(destino, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ...(spread)
 * 
 *  // já vimos 
 * Object.keys  (retorna as chaves)
 * Object.freeze    (congela o objeto)
 * Object.defineProperties  (define várias propriedades)
 * Object.defineProperty    (define uma propriedade)
 ***/

const produto = {nome:'Caneca', preco: 1.8};

// Utilizando Object.values() para obter um array com os valores das propriedades
console.log(Object.values(produto)); // Saída: [ 'Caneca', 1.8 ]

// Utilizando Object.entries() para obter um array de arrays com entradas (chave-valor)
console.log(Object.entries(produto)); // Saída: [ [ 'nome', 'Caneca' ], [ 'preco', 1.8 ] ]

// Iterando sobre as entradas do objeto usando um loop for...of
for(let entry of Object.entries(produto)){
    console.log(entry);
}
/*
Saída esperada:
[ 'nome', 'Caneca' ]
[ 'preco', 1.8 ]
*/

// Utilizando destructuring para obter chave e valor ao mesmo tempo
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}
/*
Saída esperada:
nome Caneca
preco 1.8
*/

// Alternativa menos comum: iterando sobre os valores diretamente
for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
}
/*
Saída esperada:
nome Caneca
preco 1.8
*/
