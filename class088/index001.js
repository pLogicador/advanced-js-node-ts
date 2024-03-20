// Async / Await: Simplificando o código assíncrono
/***
 * Async / Await é uma forma de simplificar e tornar mais legível o código assíncrono,
 * permitindo que você escreva código assíncrono como se fosse síncrono.
 * 
 * Async: A palavra-chave `async` é usada para declarar uma função como assíncrona.
 * Isso permite que a função utilize a palavra-chave `await` para aguardar a resolução
 * de uma Promise dentro do corpo da função.
 * 
 * Await: A palavra-chave `await` é usada dentro de funções assíncronas para esperar que uma
 * Promise seja resolvida. Isso permite que o código aguarde a conclusão de operações assíncronas
 * sem bloquear o thread principal de execução.
 * 
 * Quando você utiliza `await` em uma Promise, a execução do código na função assíncrona é pausada
 * até que a Promise seja resolvida ou rejeitada. Isso torna o código mais legível e semelhante
 * à forma síncrona de escrever código.
 * 
 * O uso de `try...catch` em torno do código `await` permite lidar com erros de forma mais limpa e legível,
 * permitindo que os erros sejam tratados de forma semelhante a uma exceção em código síncrono.
 * 
 * OBS: As Promises têm 3 estados:
 *      - Pendente (pending): Quando uma Promise está sendo executada mas não retornou um valor, seu status é "pending".
 *      - Resolvida (fulfilled): Quando a Promise é bem-sucedida e retorna um valor, seu status é "fulfilled".
 *      - Rejeitada (rejected): Quando a Promise falha e lança um erro, seu status é "rejected".
 * 
 * OBS: Em situações específicas, é necessário utilizar tanto `then` quanto `catch`, enquanto em outras
 * situações, o uso de `async` e `await` é mais adequado. A escolha depende do contexto e da preferência
 * de estilo de codificação.
 */

// Simula um tempo aleatório, gera um número aleatório
function rand(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Simula uma operação assíncrona com um tempo de espera
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

/* 
// Mais confuso
esperaAi('Fase 01', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 02', rand());
    }). then(fase =>{
        console.log(fase);
        return esperaAi('Fase 03', rand());
    }).then(fase => {
        console.log(fase);
        return fase;
    }). then(fase => {
        console.log('Terminamos na fase: ', fase);
    })
    .catch(e => console.log('ERRO', e));
*/

// Mais limpo
// Função assíncrona que executa operações assíncronas de forma síncrona
async function executa(){
    try { 
        // Aguarda a conclusão de cada operação assíncrona e imprime o resultado
        const fase1 = await esperaAi('Fase 01', rand());
        console.log(fase1);

        const fase2 = await esperaAi(5, rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 03', rand());
        console.log(fase3);
        console.log('Terminamos na fase: ', fase3);
    } catch(e) {
        console.log('ERRO', e);
    }
}

// Chama a função executa para iniciar as operações assíncronas
executa();
