// Map - Mapeando o Array

/*
    No método map, a principal diferença em relação ao filter é que o map altera os valores originais do array,
    criando um novo array com os valores resultantes da aplicação da função de callback em cada elemento.

    É importante observar que map não altera o array original, mas sim cria um novo array com os valores transformados.

    Além disso, para o exemplo de adicionar uma chave 'id' a cada objeto, foi utilizado o spread operator para 
    garantir que o array original não fosse modificado, criando cópias dos objetos.

    Para a solução 3 (adicionar uma chave 'id' em cada objeto), foram apresentadas duas versões:
    - A v1 modifica o array original, acrescentando a chave 'id' em cada objeto.
    - A v2 cria um novo array sem modificar o array original, utilizando o spread operator para copiar os objetos.

    No geral, o método map é útil para transformar os valores de um array, seja criando um novo array com esses
    valores ou modificando os valores no array original.
*/

// Dobre os números
const numeros = [5, 50, 60, 5, 50, 2, 0, 80, 11, 6, 5, 4, 10, 101, 84];
const dobraNumeros = numeros.map(valor => valor * 2);
console.log("Números dobrados:", dobraNumeros);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome:'Pedro', idade:24 },
    { nome:'Rodrigo', idade:48 },
    { nome:'Maria', idade:20 },
    { nome:'Stephane', idade:90 },
    { nome:'Mario', idade:55 },
    { nome:'Evellyn', idade:15 },
    { nome:'Amiltom', idade:64 }
];

// Retorne apenas uma string com o nome da pessoa
const nomePessoas = pessoas.map(obj => obj.nome);
console.log("Nomes das pessoas:", nomePessoas);


/*
// v1 da solução 2
const chaveRemovida = pessoas.map((obj)=>{
    delete(obj.nome);
    return obj;
});

//v2 da solução 2
const chaveRemovida = pessoas.map((obj)=>{
    return {idade: obj.idade};
});
*/

// Remova apenas a chave 'nome' do objeto
const chaveRemovida = pessoas.map(obj => ({ idade: obj.idade }));
console.log("Chave 'nome' removida:", chaveRemovida);


/*
// v1 da solução 3 que modifica o array original

const comIds = pessoas.map((obj, indice)=>{
    obj.id = (indice+1)*1000;
    return obj
});
*/

// Adicione uma chave 'id' em cada objeto (v2 da solução 3)l
const comIds = pessoas.map((obj, indice)=>{
    const newObj = {...obj};
    newObj.id = (indice+1)*1000;
    return newObj;
});

console.log("Array original:", pessoas);
console.log("Array com a chave 'id' adicionada:", comIds);
