// Métodos úteis para Promises : Utilizando Promise.race
/*
 * Promise.race é um método que recebe um array de Promises e retorna uma nova Promise
 * que é resolvida ou rejeitada assim que a primeira Promise no array for resolvida ou
 * rejeitada. Ou seja, apenas a primeira Promise que resolver ou rejeitar determinará o
 * resultado da Promise retornada por Promise.race.
 * 
 * Neste exemplo, estamos utilizando Promise.race para verificar qual Promise do array
 * será resolvida primeiro, com base nos tempos de espera definidos para cada uma. A
 * Promise.race retornará o resultado da primeira Promise que for resolvida ou rejeitada.
 */
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {

        setTimeout(() =>{
            if (typeof msg !== 'string') {
                reject('Cai no ERRO');
                return;
            } 

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// Array de Promises com diferentes tempos de espera
const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    esperaAi(1000, 50), // Esta Promise será rejeitada por receber um número inválido
    
];

// Utilizando Promise.race para verificar a primeira Promise a ser resolvida
Promise.race(promises)
    .then(function(dados) {
        console.log(dados);
    })
    .catch(function(erro){
        console.log(erro);
    });