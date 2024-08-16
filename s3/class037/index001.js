// for of (estrutura de repetição)
// iterando pelos indices strings e arrays
/*
Qual utilizar ?

for clássico    -   Geralmente com iteráveis    (array ou strings)
for in          -   Retorna o índice ou chave   (array, strings ou objetos)
for of          -   Retorna o valor em si       (iteráveis, array ou strings)

*/

const nome = 'Pedro,Miranda';
const nomeArr = ['Pedro', 'Silva', 'Miranda'];

console.log('\b Exemplo com for of');
for (let value of nome) {
    console.log(value); // execução mais direta
}

console.log('\n');
for (let valor of nomeArr) {
    console.log(valor);
}

// Execuções Semelhante
console.log('\n Exemplo com for clássico');
for (let i=0; i<nome.length; i++) {
    console.log(nome[i]);
}

console.log('\n Exemplo com for in');
for (let i in nome) {
    console.log(nome[i]);
}

// for em funções
console.log('\n Exemplo com função forEach');
nomeArr.forEach(function(element, index, array){ // parametros de valor, indice e array (opcionais)
    console.log(element, index, array);
});

// Para objetos
console.log('\n\n for para objetos');
const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Miranda'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}