// não podemos reatribuir valores em um array cont apenas em let
// Declarando um objeto literal
/*
const pessoa1 = {
    nome: 'Pedro',
    sobrenome: 'Miranda',
    idade: 21
};

console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/

/*
// Criando uma função que instancia um objeto (função factore)
                        // parametro
function createPerson (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}
                            // argumento
const p1 = createPerson('Pedro', 'Miranda', 21);
const p2 = createPerson('Otávio', 'Santos', 40);
const p3 = createPerson('Luna', 'Matos', 33);
console.log(p1);
console.log(p1.nome, p2.nome, p3.nome);
*/

// Criando métodos
const pessoa2 = {
    nome: 'Pedro',
    sobrenome: 'Miranda',
    idade: 21,

    fala() { // Não é preciso utilizar a palavra 'function' antes do nome do método
        console.log(`${this.nome} ${this.sobrenome} fala olá, mundo!`); // 'this' representa: este objeto
        console.log(`Minha idade é ${this.idade}`); // 'this' representa: este objeto
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();