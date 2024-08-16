// Funções de callback

/*
    Função auxiliar para gerar números randômicos dentro de um intervalo específico.
*/
function rand(min = 1000, max= 3000) { 
    const numRandom = Math.random() * (max-min) + min;
    return Math.floor(numRandom);
}

/*
    Função f1: Simula uma operação assíncrona com um atraso randômico.
    Aceita um callback como parâmetro, que será chamado quando a operação estiver concluída.
*/
function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, rand());
}

/*
    Função f2: Similar a f1, simula outra operação assíncrona.
*/
function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand());
}

/*
    Função f3: Simula mais uma operação assíncrona.
*/
function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}

/*
    Exemplo 1: Execução sem callback de forma aleatória.
*/
f1();
f2();
f3();
console.log('Olá Mundo');
/*
// Exemplo 2: Execução encadeada utilizando callbacks (callback hell).
// OBS: Há um pequeno erro de sintaxe na chamada da função f3.

f1(function(){
    f2(function(){
        f3(){
            console.log('Olá, Mundo!');
        };
    });
});
*/
// Exemplo 3: Limpeza de callbacks utilizando funções separadas.
f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f2(f3Callback);
}

function f3Callback(){
    console.log('Olá, Mundo!');
}
