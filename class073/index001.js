// Métodos úteis para objetos: Copiando, Congelando e Obtendo Propriedades

/***
 * Em JS, existem vários métodos úteis para trabalhar com objetos, 
 * permitindo copiá-los, congelá-los e obter informações sobre suas propriedades.
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

// Criando uma referência ao objeto original (exReferencia apenas aponta para o mesmo objeto)
const exReferencia = produto;

// Pior forma de copiar um objeto (cria uma cópia rasa)
const exCopia0 = {nome: produto.nome, preco: produto.preco};

// Primeira forma de copiar um objeto usando o spread operator (cria uma cópia e adiciona novas propriedades)
const exCopia1 = {...produto, modelo: 'barro'};

// Segunda forma de copiar um objeto usando Object.assign() (cria uma cópia e permite adicionar novas propriedades)
const exCopia2 = Object.assign({}, produto, {material: 'porcelana'});

// Modificando a cópia sem afetar o objeto original
exCopia2.nome = 'Outro nome';
exCopia2.preco = 2.5;

// Exibindo os objetos original e a cópia modificada
console.log(produto);
console.log(exCopia2);

// Obtendo as chaves do objeto original
console.log(Object.keys(produto));

// Congelando o objeto original para evitar alterações
Object.freeze(produto);

// Tentativa de modificar uma propriedade após o congelamento (não terá efeito)
produto.nome = 'asasa';

// Exibindo o objeto após o congelamento
console.log(produto);
