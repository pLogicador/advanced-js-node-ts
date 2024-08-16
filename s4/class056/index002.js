// Funções fábrica (factory functions) VS Função construtora (constructor functions)
/*
    A principal diferença entre esses dois tipos de funções está na forma como os objetos são criados.

    - Funções Fábrica: Retornam um objeto diretamente. São funções que fabricam e retornam objetos literalmente.
    - Funções Construtoras: Utilizam a palavra-chave 'new' para instanciar objetos. Elas operam em um modo "construtor".

    O exemplo abaixo utiliza uma Factory Function para criar um objeto pessoa com métodos e propriedades.

    Nota: No exemplo, a propriedade 'nomeCompleto' é configurada usando getters e setters, enquanto 'imc' é apenas um getter.

*/

// Factory Function: Cria um objeto pessoa
function criaPessoa(nome, sobrenome, height, weight) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        // método
        fala(asunnto = '...'){
            return `${this.nome} está falando ${asunnto}`;
        }, 

        altura: height,
        peso: weight, 

        // Gettter
        get imc(){
            const indice = this.peso / (this.altura * this.altura);
            return indice.toFixed(2);
        }

    };
}

// Criando uma pessoa usando a Factory Function
const p1 = criaPessoa('Pedro', 'Miranda', 1.80, 75);
p1.nomeCompleto = 'Jertrudes Miranda Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);  
console.log(p1.fala());

// Tentando modificar a altura diretamente (não funciona, pois não possui um Setter)
p1.altura = 1.75;
console.log(p1.imc);    // O imc permanece o mesmo