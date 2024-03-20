// factore functions, constructor functions, Clases em JS

/**
 * Em JS, a utilização da palavra-chave 'new' altera o comportamento de uma função,
 * convertendo-a em uma função construtora. A diferença principal entre os tipos de funções
 * está na manipulação da palavra-chave 'this'.
 *
 * O que 'new' faz em uma função construtora?
 *    - Cria um objeto vazio.
 *    - Atribui a palavra-chave 'this' a esse objeto.
 *    - Atrela o 'this' ao objeto criado.
 *    - Retorna o 'this'.
 *        - Ou seja, {} <- this -> this
 *
 * Mesmo ao utilizar 'const', não estamos impedindo a alteração da variável, mas sim o valor
 * da referência de memória. Podemos usar 'const' para manter a referência de memória constante
 * (ou seja, não podemos atribuir um novo objeto a essa variável), mas podemos modificar
 * propriedades do objeto referenciado.
 * 
 * A herança em JS é uma linguagem baseada em propósitos
 */ 

// Exemplo de função de fábrica
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Pedro', 'Miranda');
console.log(p1.nomeCompleto);

// Exemplo de função construtora
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);    // Trava o objeto, impedindo alterações. Cuidado: pode ser limitante.
}
const p2 = new Pessoa('Lucas', 'Oliveira');
Object.freeze(p2);          // Ainda que o objeto seja congelado novamente, as propriedades não podem ser modificadas.
console.log(p2); 