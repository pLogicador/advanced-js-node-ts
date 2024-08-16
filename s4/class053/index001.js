// closures
/*
    Closures estão relacionados ao escopo léxico de uma função. 
    Eles têm a habilidade de acessar seu escopo léxico mesmo após a execução da função.

    Nesta função abaixo, a função anônima possui 3 escopos léxicos:

    1. Closure: Inclui variáveis definidas fora da função. Como esta função está fechando um escopo, 
    quando ela é executada, ela vai reter a referência à variável do jeito que foi definida.

    2. Script: Refere-se ao local onde a função foi declarada. Se outra função fosse declarada no mesmo local, 
    ela teria acesso, tornando-as "vizinhas". Acesso ao que está no script.

    3. Global: Pode acessar qualquer coisa, no contexto web, 
    dentro do objeto global (por exemplo, `window`).

*/

// Exemplo 1: Closure retendo referência à variável 'nome'
function retornaFuncao(){
    const nome = 'Pedro';

    return function(){ // retorna uma função anonima
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao);    // Saída: 'Pedro'
console.dir(funcao);    // 'dir' é semelhante a 'log', mas revela mais detalhes sobre a função anônima e seus escopos léxicos


// Exemplo 2: Closures mantendo escopo específico para cada função criada
function retornaFuncao2(nome){
    return function(){
        return nome;
    };
}

const funcao1 = retornaFuncao2('Pedro'); // ela precisa fechar o escopo com o parametro (explique melhor)
const funcao2 = retornaFuncao2('Maria');
console.dir(funcao1);
console.dir(funcao2);

console.log(funcao1(), funcao2()); // essas funções não mudam, vão ser sempre assim (explique melhor)
/*
    Nestes exemplos, as funções criadas mantêm uma referência ao escopo léxico onde foram criadas,
    permitindo que a variável 'nome' seja acessada mesmo após a execução das funções externas.
*/