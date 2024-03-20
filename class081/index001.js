// Criando classes
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Os métodos em classe são automaticamente linkados no prototype desta classe
    // Também são herdados para cada instância
    falar() {
        console.log(`${this.nome} está falando...`);
    }
}

// Agora, utilizando função construtora (a única diferença é construtor)
function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando...`);
};


const p1 = new Pessoa('Pedro', 'Miranda');
const p2 = new Pessoa2('Joana', 'Evellyn');
p1.falar();
console.log(p1);

p2.falar();
console.log(p2);

