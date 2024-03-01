/*
    O método filter não altera os elementos do array original, ele apenas retorna um novo array
    contendo os elementos que satisfazem a condição da função de callback fornecida.
*/

const pessoas = [
    { nome:'Pedro', idade:24 },
    { nome:'Rodrigo', idade:48 },
    { nome:'Maria', idade:20 },
    { nome:'Stephane', idade:90 },
    { nome:'Mario', idade:55 },
    { nome:'Evellyn', idade:15 },
    { nome:'Amiltom', idade:64 }
];

// Retorne as pessoas que possuem o nome com 7 letras ou mais
const pessoasComNomeLongo = pessoas.filter(objeto => objeto.nome.length >= 7);

// Retorne as pessoas com mais de 40 anos
const idadeMaiorQuarenta = pessoas.filter(objeto => objeto.idade > 40);

// Retorne as pessoas cujo nome termina com 'o'
const nomeTerminaComO = pessoas.filter(objeto => objeto.nome.toLowerCase().endsWith('o'));

console.log(pessoasComNomeLongo);
console.log(idadeMaiorQuarenta);
console.log(nomeTerminaComO);
