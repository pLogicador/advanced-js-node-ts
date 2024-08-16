/*  Logical Operators

&&  ->  AND   ->  E     - Todas as expressões precisam ser verdadeiras para retornar true 
||  ->  OR    ->  OU    - Basta que uma das expressões seja verdadeira para retornar true.
!   ->  NOT   ->  NÃO   - Inverte o valor lógico da expressão; true se torna false e vice-versa.  */

const checkAnd = true && true; // Retorna true porque ambas as expressões são verdadeiras.
const checkOR = false || true || false; // Retorna true porque pelo menos uma expressão é verdadeira.
const checkNot = !false; // Retorna true porque a negação de false é true.

console.log(true && true); // true: ambas as expressões são verdadeiras.
console.log(!!true); // true: a dupla negação inverte o valor duas vezes, retornando ao original.