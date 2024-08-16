// Funções imediatas (IIFE) -> Immediately Invoked Function Expression

// Invocando uma função anônima sem que ela toque o escopo global
(function(){    // sem parâmetros
    const nome = 'Pedro';

    console.log(nome);
})();   // sem argumentos

const nome = 'Miranda';

// Utilizando parâmetros em uma IIFE
(function(idade, peso, altura){   

    console.log(idade, peso, altura)
})(20, 75, 1.80);   // com argumentos

// Evite SyntaxError utilizando uma expressão de função anônima
/*
function(){

}()
*/

/*
    Ao usar IIFE, você evita poluir o escopo global, mantendo as variáveis locais dentro da função
    e apenas expondo o que for necessário.
*/