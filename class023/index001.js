/* Short Circuit
&&  -   false && true   -   retorna o valor falso
||  -   true || false   -   retorna o valor verdadeiro

FALSY VALUES
    false
    0
    ' '  " "  ` `       espaço vazio
    null/undefined
    NaN
*/


// Avaliação de curto circuito sem estrutura condicional, ex1 - AND
function falaOi() {
    return 'Oi!';
}

let vaiExecutar = 'miguel';
console.log(vaiExecutar && falaOi());   // avaliando da esquerda para a direita, retornando o primeiro valor falso 


console.log(0 || false || null || 'Miranda' || true);   // avaliando da esquerda para a direita, retornando o primeiro valor verdadeiro 

// Avaliação de curto circuito sem estrutura condicional, ex2 - OR
const colorUser = null; // se o usuário definir uma cor então ela será avaliada primeira
const colorDefault = colorUser || 'black';

console.log(colorDefault);

// prank
const a = 0;
const b = false;
const c = 'false';
const d = undefined;
const e = NaN;

console.log(a || b || c || d || e); // retorna a string 'false'