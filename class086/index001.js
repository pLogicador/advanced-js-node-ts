// Promises 
/***
 * As Promises são uma maneira de lidar com operações assíncronas em JS.
 * Elas são usadas para realizar operações que podem levar um tempo indeterminado,
 * como acessar um banco de dados, fazer uma solicitação de rede ou qualquer outra
 * operação que não seja imediata.
 * 
 * Criando promessas:
 * Você cria uma Promise usando o construtor dela.
 * Este construtor recebe uma função com dois parâmetros:
 *   - resolve: função a ser chamada quando a operação assíncrona for bem-sucedida,
 *              e o resultado estiver disponível. Isso encaminha para o método `then`.
 *   - reject: função a ser chamada quando ocorrer um erro durante a operação assíncrona.
 *             Isso encaminha para o método `catch`, onde o erro pode ser tratado.
 */

// Função para gerar um número aleatório entre min e max (em segundos)
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Função que simula uma operação assíncrona
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        // Verifica se o tipo de mensagem é uma string
        if(typeof msg !== 'string') reject(new Error('Error'));

        // Simula uma operação assíncrona com um tempo de espera determinado
        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
    
}

// Exemplo de uso de Promises encadeadas
esperaAi('Conectando ao BD...', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados...', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);

        // Simulando um erro intencional passando um número ao invés de uma string
        return esperaAi(456789, rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
    }).then(()=>{
        console.log('Exibindo dados na tela...');
    })
    .catch(e => {
        console.log('ERRO:', e);    // Captura e trata qualquer erro ocorrido durante a execução
    });

console.log('Essa msg será exibida antes de qualquer promise.');