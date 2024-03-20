// Object.defineProperty() e Object.defineProperties()
/**
 * Em JS, a função Object.defineProperty() é utilizada para adicionar uma nova propriedade
 * ou modificar uma propriedade existente em um objeto, controlando suas características.
 *
 * A diferença entre Object.defineProperty() e Object.defineProperties() reside no número de propriedades
 * que podem ser configuradas de uma vez. A primeira é usada para configurar uma única propriedade,
 * enquanto a segunda é usada para configurar várias propriedades de uma só vez.
 */
// Exemplo utilizando Object.defineProperty()
function Produto(nome, preco, estoque){
    /*
    this.nome = nome;
    this.preco = preco;
    */
    // Utilizamos Object.defineProperty() para configurar a propriedade 'estoque'
    Object.defineProperty(this, 'estoque', {
        enumerable: true,      // Mostra a chave durante a iteração
        value: estoque,        // Valor inicial
        writable: false,       // Impede a alteração do valor
        configurable: false    // Impede a reconfiguração da chave
    });

    // Utilizamos Object.defineProperties() para configurar múltiplas propriedades
    Object.defineProperties(this, {
        nome: {
            enumerable: true,    // Mostra a chave durante a iteração
            value: nome,         // Valor inicial
            writable: true,      // Permite a alteração do valor
            configurable: true   // Permite a reconfiguração da chave
        },
        preco:{
            enumerable: true,    // Mostra a chave durante a iteração
            value: preco,        // Valor inicial
            writable: true,      // Permite a alteração do valor
            configurable: true   // Permite a reconfiguração da chave
        },
    });
}
const p1 = new Produto('Calça',50, 6 );

// Exemplo de manipulação de propriedades após a criação do objeto
/*
p1.estoque = 1;
delete p1.estoque;
console.log(p1);
*/

// Exemplos de iteração sobre as chaves do objeto
console.log(Object.keys(p1)); // Retorna um array com as chaves enumeráveis
for (let chave in p1) {
    console.log(chave);
}