// Manipulando Protótipos em JavaScript: Exemplo de Melhoria de Performance
/***
* Neste exemplo, demonstramos como melhorar a performance de consultas ou instâncias de objetos
 * ao utilizar protótipos para definir métodos em vez de adicioná-los diretamente nos objetos.
 * Isso permite que os métodos sejam compartilhados entre todas as instâncias, economizando
 * memória e otimizando a execução.
 */

// Definindo uma função construtora Produto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Adicionando métodos ao protótipo da função construtora Produto
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

// Criando uma instância da função construtora Produto (p1)
const p1 = new Produto('Short', 45);
//p1.desconto(100);
//p1.aumento(100);
console.log(p1);

// Criando um objeto literal (p2) e definindo seu protótipo como Produto.prototype
const p2 = {
    nome: 'Janela',
    preco: 940
};

Object.setPrototypeOf(p2, Produto.prototype);

// Aplicando aumento ao objeto p2
p2.aumento(10);

// Exibindo o objeto p2 (como se fosse um produto criado pela função construtora)
console.log(p2);

// Criando um novo objeto (p3) e definindo seu protótipo como Produto.prototype
const p3 = Object.create(Produto.prototype);
p3.preco = 55;

// Aplicando aumento ao objeto p3
p3.aumento(10);
console.log(p3);

// Criando um novo objeto (p4) e definindo seu protótipo e atributos simultaneamente
const p4 = Object.create(Produto.prototype, {
    preco:{
        writable:true,
        enumerable:true,
        value: 15
    },
    tamanho:{
        writable:true,
        enumerable:true,
        value: 150
    },
    
});

// Aplicando aumento ao objeto p4
p4.aumento(10);

// Exibindo o objeto p4
console.log(p4);
