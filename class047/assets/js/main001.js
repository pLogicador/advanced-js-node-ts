/*
Closure (Fechamento): Uma closure é uma função que tem acesso a variáveis de seu próprio escopo, 
bem como às variáveis do escopo em que ela foi criada (escopo pai). Isso significa que uma 
função pode "lembrar" do ambiente em que foi criada, mesmo se for executada fora desse ambiente. 
Closures são úteis para criar funções que encapsulam comportamentos específicos e podem 
ser usadas para implementar conceitos como encapsulamento e privacidade de variáveis.
*/

const CLOCK = document.querySelector('.clock');
const START = document.querySelector('.start');
const PAUSE = document.querySelector('.pause');
const RESET = document.querySelector('.reset');
let seconds = 0;
let timer;

function createTimeOfSeconds(seconds) {
    const DATE = new Date(seconds * 1000);
    return DATE.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function startClock(){
    timer = setInterval(function(){
        seconds++;
        CLOCK.innerHTML = createTimeOfSeconds(seconds);
    }, 1000);
}

START.addEventListener('click', function(event){
    CLOCK.classList.remove('paused');
    CLOCK.classList.add('starting');
    clearInterval(timer);
    startClock();
})


PAUSE.addEventListener('click', function(event){
    CLOCK.classList.remove('starting');
    CLOCK.classList.add('paused');
    clearInterval(timer);
})

RESET.addEventListener('click', function(event){
    CLOCK.classList.remove('starting');
    CLOCK.classList.remove('paused');
    clearInterval(timer);
    CLOCK.innerHTML = '00:00:00';
    seconds = 0;
})
