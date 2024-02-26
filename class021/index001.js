/*  Operadores de Comparação

>   - maior que 
>=  - maior que ou igual a 
<   - menor que 
<=  - menor que ou igual a 
==  - igualdade (diferente de '=' atribuição)           -> valor (não utilizamos)
=== - igualdade estrita                                 -> valor e tipo
!=  - diferença                                         -> valor (não utilizamos)
!== - diferença estrita                                 -> valor e tipo
*/

// TYPE CORRECTION
const leftValue = 10;
const rightValue = '10';

const checkOperands = leftValue === rightValue;
console.log(checkOperands);