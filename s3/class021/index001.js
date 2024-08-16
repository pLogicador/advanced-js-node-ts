/*  

Comparison operators
-------------------------------------------------
|    >   - greater than                         |
|    >=  - greater than or equal to             |
|    <   - less than                            |
|    <=  - less than or equal to                |
|    ==  - equality          (value)            |
|    === - strict equality   (value and type)   |
|    !=  - difference        (value)            |
|    !== - strict difference (value and type)   |    
-------------------------------------------------

Type Coercion
- Type coercion é o processo pelo qual o JavaScript converte implicitamente valores de um tipo para outro 
durante certas operações, incluindo comparações. Quando você utiliza os operadores == (igualdade) ou != (diferença), 
o JavaScript pode realizar a coerção de tipos para comparar/converter(ou "coagir") valores de tipos diferentes, 
como números e strings.

- A coerção de tipo ocorre somente com os operadores de comparação não estritos (== e !=).

- Os operadores estritos, por outro lado, não realizam coerção de tipo. Eles comparam tanto o valor quanto o tipo dos 
operandos diretamente, sem conversão.
*/

const lValue = 10;
const rValue = '10';
const checkOperands = lValue === rValue;

console.log(checkOperands);
