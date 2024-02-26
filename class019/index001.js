// valores primitivos e por referencia

/*
    PRIMITIVOS (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados 

    REFERÊNCIA (mutáveis) - array, object, function - passados por referencia
*/

//          01234
let nome = 'Pedro';
nome[0] = 'R';
console.log(nome[0], nome);


let a = 'A';
let b = a;
console.log(a, b);


let c = [1, 2, 3];
let d = c;  // c e d apontam para o mesmo valor na memória. Ou seja, são ambos afetados


let e = [...a]; // valor puxado literalmente de a (spread)


const f = {
    nome: ' Pedro',
    sobrenome: 'Miranda'
};

const g = {...f}; // g agora possui um valor independente de f

f.nome = 'Luiz';
console.log(f);
console.log(g);