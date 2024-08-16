let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// solução 1
/*
const temp = varA; 
varA = varB;
varB = varC;
varC = temp;
*/

// solução 2
[varA, varB, varC] = [varB, varC, varA]; // invertendo os valores sem definir uma nova variável

console.log(varA, varB, varC);