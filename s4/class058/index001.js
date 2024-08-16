// Funções contrutoras (constructor functions)

/*  É como um molde para gerar objetos
    Função construtora  ->  objeto
    Função fábrica      ->  objeto

    Uma função construtora é como um molde para gerar objetos.
    Ela cria objetos com propriedades e métodos compartilhados.
    Em JS, as funções construtoras são frequentemente utilizadas 
    com a palavra-chave 'new' para criar instâncias desses objetos.

    Convenção: Funções construtoras geralmente começam com letra maiúscula
    Exemplo: Pessoa, Carro, Produto, etc.
*/

// Molde para Pessoa
function Pessoa(nome, sobrenome) {
    /*
    // Atributos ou métodos privados
    const ID = 001529886;

    // Este método não está disponível fora da função construtora
    const metodoInterno = () =>{};
    */

    // 'this' é usado para criar atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Método público
    this.metodo = () =>{
        console.log(`${this.nome}, sou um método!`);
    };
}

/*
    O 'this' em JS refere-se ao objeto que está sendo criado ou modificado quando a 
    função construtora é chamada com a palavra-chave 'new'. 
    Em outras palavras, this' aponta para a instância do objeto que está sendo criada.
*/
// Instanciando pessoas usando a função construtora
const p1 = new Pessoa('Pedro', 'Miranda');
const p2 = new Pessoa('Laura', 'Fernanda');

// Acessando propriedades e métodos das instâncias
console.log(p1.nome);   // Saída: Pedro
console.log(p2.nome);   // Saída: Laura

// Chamando um método público da instância
p1.metodo();    // Saída: Pedro, sou um método!
p2.metodo();    // Saída: Laura, sou um método!
