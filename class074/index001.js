// Prototypes
/***
 * JS é baseado em protótipos para passar propriedades e métodos 
 * de um objeto para outro.
 * 
 * Definição de protótipo:
 * Protótipo é o termo usado para se referir ao que foi criado pela
 * pela primeira vez, servindo de modelo ou molde para futuras produções.
 * 
 * Todos os objetos tem uma referencia interna para um protótipo (__proto__)
 * que vem da propriedade prototype da função construtora que foi usada para
 * criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
 * do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
 * de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
 */

// Construtora -> molde (classe)
// Definindo a função construtora Pessoa
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.nome = sobrenome;
//  this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`; // Se não apagar esse ele irá sobreescrever o do prototype
}

// Pessoa.prototype === pessoa1.__proto__ 

// prototype é um objeto que já automaticamente atrelado a função construtora
// e todos os objetos que vem da contrutora também herdarão o que for criado no prototype
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

// Criando instâncias da função construtora
const pessoa1 = new Pessoa('Pedro', 'M.'); // <- Pessoa = Função construtora
const data = new Date();    // <- Date = Função construtora

/* Cadeia de herança:
    pessoa1 --> Pessoa.prototype --> Object.prototype
    data --> Date.prototype --> Object.prototype
*/

// Exibindo informações detalhadas sobre as instâncias e suas cadeias de protótipos
console.dir(pessoa1); // Exibe informações sobre pessoa1 e sua cadeia de protótipos
console.dir(data);    // Exibe informações sobre data e sua cadeia de protótipos