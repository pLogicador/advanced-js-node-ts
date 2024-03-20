// Métodos úteis para Promises: Utilizando Promise.resolve e Promise.reject
/***
 * Promise.resolve e Promise.reject são métodos estáticos da classe Promise que
 * permitem criar e retornar rapidamente uma Promise resolvida ou rejeitada, respectivamente.
 * 
 * No exemplo fornecido, a função baixaPagina simula o download de uma página da web.
 * Ela verifica se a página está em cache e, se estiver, retorna uma Promise já resolvida
 * ou rejeitada usando Promise.resolve ou Promise.reject, respectivamente. Se a página não
 * estiver em cache, retorna uma Promise que simula o download da página.
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

// Função para baixar a página
function baixaPagina(){
    const emCache = true;

    if(emCache){
        // Retorna uma Promise já rejeitada se a página estiver em cache
        return Promise.reject('Página em cache...'); // cai direto para o catch
    } else {
        // Retorna uma Promise simulando o download da página
        return esperaAi('Baixei a página', 3000);
    }
}

// Utilizando baixaPagina para baixar a página e tratando o resultado
baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('Erro', e));
