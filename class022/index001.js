/*  Operadores Lógicos

&&  ->  AND   ->  E     - Todas as expressões precisam ser verdadeiras para retornar true 
||  ->  OR    ->  OU    - Uma das expressões precisa ser verdadeira para retornar true 
!   ->  NOT   ->  NÃO   - Inverte a expressão

*/
const checkAnd = true && true;
const checkOR = false || true || false;
const checkNot = !false;

console.log(true && true); 
console.log(!!true); // negando duas vezes