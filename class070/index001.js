// Revisando Objetos

// Exemplo 1: Declarando um objeto de forma literal
const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Miranda'
};
// Podemos acessar as propriedades do objeto de duas maneiras:
console.log(pessoa['nome']);    // Acesso direto
const chave = 'nome';
console.log(pessoa[chave]);     // Acesso dinâmico
console.log(pessoa.sobrenome);  // Acesso direto

// Exemplo 2: Declarando um objeto por meio de um construtor
const pessoa1 = new Object();

// Adicionando propriedades ao objeto
pessoa1.nome = 'Luiza';
pessoa1.sobrenome = 'Fernanda';

// Excluindo uma propriedade do objeto
delete pessoa1.nome;    

// Adicionando métodos ao objeto
pessoa1.falarNome =  function(){
    return (`${this.sobrenome} está falando`);
};

pessoa1.idade = 22;

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

// Acessando e utilizando as propriedades e métodos do objeto
console.log(pessoa1.nome);         // Acesso direto
console.log(pessoa1.sobrenome);    // Acesso direto

console.log(pessoa1.falarNome());           // Chamando o método
console.log(pessoa1.getDataNascimento());   // Chamando o método

// Iterando sobre as propriedades do objeto usando um loop for...in
for(let chave in pessoa1) {
    console.log(pessoa1[chave]);
}
