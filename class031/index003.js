// hoisting
/* O JavaScript eleva (hoisting) todas as declarações 'var' e 'function' para o topo do seu escopo.
    Entretanto, é importante notar que apenas a declaração é elevada, não a inicialização.
*/

// Exemplo com 'var' - a declaração é elevada, mas a inicialização permanece no lugar
console.log(subname);   // undefined (subname é elevado, mas ainda não foi inicializado)
var subname = 'Miranda';

// Exemplo com 'let' - não ocorre hoisting com 'let', resultando em um ReferenceError
//console.log(name);  // Erro! name is not defined
let name = 'Pedro';

// Exemplo com 'function' - tanto a declaração quanto a inicialização são elevadas
console.log(addNumbers(5, 10)); // 15
function addNumbers(leftNumb, rightNumb) {
    return leftNumb + rightNumb;
}

// Exemplo com 'const func =' - não ocorre hoisting para esse tipo de função
// console.log(func); // Erro! func is not defined
const func = function() {
    // ...
};
