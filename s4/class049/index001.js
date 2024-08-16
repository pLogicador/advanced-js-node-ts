// Maneiras de declarar funções em JS

/*
Hoisting de Função: Em JS, durante a execução, as declarações de funções são elevadas para o topo do código. 
Isso significa que você pode chamar a função tanto antes quanto depois de sua declaração.

Função de Primeira Classe: Em JS, as funções são tratadas como dados, o que significa 
que podem ser passadas como argumentos para outras funções, retornadas por outras funções e atribuídas a variáveis. 
Isso confere às funções o status de "objetos de primeira classe".
*/
// Hoisting de Função (Function hoisting)
speakHello();   // Isso funciona devido ao hoisting

function speakHello(){
    console.log('Hello!');
}


console.log('#####');
// First-class object (objetos de primeira classe)
// function expression
const imOneData = function() {
    console.log('sou um dado.');
};

imOneData();


console.log('#####');
function executeFunction (funcao) {
    funcao();
}

executeFunction(imOneData);

console.log('#####');
// Arrow function
const functionArrow = () => {
    console.log("Eu sou um arrow function");
}

functionArrow();


console.log('#####');
// Dentro de um objeto
const obj = {
    talk: function () {
        console.log('Estou falando...')
    }
};
obj.talk();

// simplificando
const obj2 = {
    talk() {
        console.log('Estou falando novamente...')
    }
};


obj2.talk();