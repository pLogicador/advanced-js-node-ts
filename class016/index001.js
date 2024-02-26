// ARRAY (básico)
const alunos = ['Luiz', 'Maria', 'João', 1, true, null];    // Não é uma boa prática! Mantenha seu array com um tipo de dado (conciso)

// A Indexação dos arrays não são por valor mas por elementos

//            0123456789
const nome = 'Pedro Miranda'
//              0        1        2   
const nomes = ['Pedro', 'Lucas', 'Bernades', 'Jonas', 'Gabriel'];

console.log(typeof nomes);
console.log(nomes instanceof Array);    // console.log(alunos é uma instancia de array?);



/*
console.log(nomes.slice(0, 3)); // fatiamento apartir do primeiro elemento
console.log(nomes.slice(0, -1)); // fatiamento apartir do último elemento 
console.log(nomes.slice(0, -2)); // fatiamento apartir do último elemento 


//console.log(nomes[90]); // Acessando posição inexistente


delete nomes[1];    // eliminando um elemento mantendo a posição vazia
console.log(nomes);
console.log(nomes[1]);


const removeFim = nomes.pop();    // Pega seu elemento e o remove do final do array 
const removeIni = nomes.shift();    // Pega seu elemento e o remove do começo do array 
console.log(nomes);
console.log(removeFim);
console.log(removeIni);


nomes.unshift('Marcio'); // Adiciona no inicio
nomes.unshift('Jonas');  

nomes[0];   // Acessando valores

nomes[0] = 'Miranda';   // Alterando
nomes[3] = 'Joana';     // Adicionando    

nomes[nomes.length] = 'Mario'; // Adicionando no fim n-1
nomes[nomes.length] = 'George';
nomes[nomes.length] = 'Rodrigo';
console.log(nomes);

nomes.push('Marcelo');  // Adicionando no fim de forma simples
nomes.push('Mary');
console.log(nomes);

*/