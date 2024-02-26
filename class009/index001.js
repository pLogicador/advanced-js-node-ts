// lei vs var (primeira diferença)
/*
    let:
    - Escopo de bloco: Limitado ao bloco onde é declarado.
    - Não é içado (hoisting) para o início do escopo.
    - Não permite redeclaração no mesmo escopo.

    var:
    - Escopo de função ou global.
    - É içado para o início do escopo.
    - Permite redeclaração no mesmo escopo.
*/

var nome = 'Pedro'; // NÃO FAÇA ISSO
var nome = 'Lucas';

console.log(nome);