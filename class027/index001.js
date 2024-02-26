// Utilização da operação ternária ->     ? :
// (condição) ? 'Para condição verdadeira' : 'Para condição falsa'
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal';

console.log(nivelUsuario);

// Código equivalente usando estrutura de controle if-else
/* 
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário Vip');
} else {
    console.log('Usuário Nomral');
}
*/

// Utilizando a técnica de valor padrão (fallback) para variável
const corUsuario = null;
const corPadrao = corUsuario || 'black';

console.log(`Nível do usuário: ${nivelUsuario}, Cor Padrão: ${corPadrao}`);