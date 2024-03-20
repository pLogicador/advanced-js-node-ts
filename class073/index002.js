// Métodos úteis para objetos
// propriedades
/***
 * Em JS, podemos utilizar alguns métodos para acessar informações sobre as propriedades
 * de um objeto, bem como modificar seus descritores para controlar a capacidade de escrita,
 * configurabilidade e enumerabilidade dessas propriedades.
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

// Modificando as propriedades e descritores da propriedade 'nome' no objeto 'produto'
Object.defineProperty(produto, 'nome', {
    writable: false,      // Impede a modificação do valor da propriedade
    configurable: false   // Impede a reconfiguração ou exclusão da propriedade
});

// Obtendo os descritores da propriedade 'nome' no objeto 'produto'
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
