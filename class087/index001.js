// Métodos úteis para Promises
/*
 * Promise.all, Promise.race, Promise.resolve e Promise.reject são métodos auxiliares
 * para lidar com Promises de forma mais eficiente e controlada.
 * 
 * - Promise.all: Recebe um array de Promises e retorna uma nova Promise que é resolvida
 *   somente quando todas as Promises no array forem resolvidas. Se uma das Promises for
 *   rejeitada, a Promise retornada por Promise.all também será rejeitada.
 * 
 * - Promise.race: Recebe um array de Promises e retorna uma nova Promise que é resolvida
 *   ou rejeitada assim que uma das Promises no array for resolvida ou rejeitada. Ou seja,
 *   apenas a primeira Promise que resolver ou rejeitar determinará o resultado da Promise
 *   retornada por Promise.race.
 * 
 * - Promise.resolve: Retorna uma Promise resolvida com o valor passado como argumento.
 * 
 * - Promise.reject: Retorna uma Promise rejeitada com a razão passada como argumento.
 */

// Função para gerar um número aleatório entre min e max (em segundos)
function rand(min, max){
    min *= 1000;    
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Função que simula uma operação assíncrona
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Cai no ERRO');
            return;
        }

        setTimeout(() =>{
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// Exemplo de uso de Promise.all
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    //esperaAi(1000, 1000),
    'Outro valor'
];

Promise.all(promises)
    .then(function(dados) {
        console.log(dados);
    })
    .catch(function(erro){
        console.log(erro);
    });