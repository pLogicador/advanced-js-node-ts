// Closures

/*
    Closures estão relacionados ao escopo léxico de uma função.
    Uma closure tem a habilidade de "lembrar" variáveis do escopo no qual foi criada,
    mesmo depois que a função externa tenha sido executada.

    No exemplo abaixo, a função anônima criada dentro da função externa
    possui acesso a 3 tipos de escopos:

    1. Closure: Mantém uma referência às variáveis externas do escopo onde a função foi criada.
    2. Escopo do Script: Refere-se ao local no código onde a função foi declarada. 
    3. Escopo Global: A função pode acessar variáveis do escopo global (como `window` no contexto web).
*/

// Example 1: Closure keeping reference to variable 'name'
function returnFunction() {
    const name = 'Pedro';

    return function() { // return an anonymous function
        return name;
    };
}

const myFunction = returnFunction();
console.log(myFunction());    // Output: 'Pedro'
console.dir(myFunction);      // Shows details about the function, including its lexical scope

// Example 2: Closures maintaining a specific scope for each created function
function returnFunctionWithParam(name) {
    return function() {
        return name;
    };
}

const func1 = returnFunctionWithParam('Pedro'); // Each created function "closes" its own scope based on the passed argument.
const func2 = returnFunctionWithParam('Maria');

console.dir(func1); // Reveals the scopes and the 'name' variable associated with the closure
console.dir(func2);

console.log(func1(), func2()); // Output: 'Pedro', 'Maria'
/*
    Cada função criada por 'returnFunctionWithParam' mantém uma referência ao valor do
    parâmetro 'name' do escopo onde foi criada. Mesmo que a função externa tenha sido
    executada e terminada, o escopo é preservado para as funções internas.

    Portanto, func1 sempre retornará 'Pedro' e func2 sempre retornará 'Maria',
    já que a closure preserva o escopo original onde a função foi criada.
*/
