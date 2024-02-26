// Mais diferenças entre let/var

/*
let - possui escopo de bloco {...bloco}
var - possui apenas escopo de função

Para 'let': O motor do JS busca dinamicamente, utilizando a técnica de hoisting, procurando
ao longo de todo o código a variável declarada, caso não esteja no mesmo corpo do bloco.
*/

const verdadeiro = true;
let declaredName1 = 'Pedro';  // Criando uma variável com 'let'
var declaredName2 = 'Pedro';  // Criando uma variável com 'var'

var declaredName2 = 'Miranda';  // Redefinindo o valor da variável 'var'
console.log( declaredName1, declaredName2);

if (verdadeiro) {
    let declaredName1 = 'pLogicador';  // Criando uma nova variável 'let' dentro do bloco
    var declaredName2 = '123';  // Redefinindo o valor da variável 'var' dentro do bloco
    console.log(declaredName1, declaredName2);

    if (verdadeiro) {
        var declaredName2 = '...';  // Redefinindo novamente a variável 'var' dentro do bloco interno
        console.log(declaredName1, declaredName2);
        //let declaredName1 = '...';  // Para 'let', o JS não permite declarar a variável após sua utilização
    }
}

// Exibindo do escopo global
console.log(declaredName1, declaredName2);