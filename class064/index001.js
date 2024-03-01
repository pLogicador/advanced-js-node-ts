// Concatenando Arrays
/*
Quando precisamos unir dois ou mais arrays em JavaScript, temos duas abordagens comuns: 
o método concat e o operador de propagação (...).

1. Utilizando o método concat:
    - O método concat é uma forma clássica de unir arrays, criando um novo array contendo os elementos dos arrays originais.
    - Exemplo:
        const a1 = [1, 2, 3];
        const a2 = [4, 5, 6];
        const a3 = a1.concat(a2, [7, 8, 9], 'Miranda');
        console.log(a3);

2. Utilizando o operador de propagação (...spread):
    - O operador de propagação é uma sintaxe mais moderna e concisa, espalhando os elementos dos arrays.
    - Exemplo:
        const a4 = [...a1, 'Miranda', ...a2, ...[7, 8, 9]];
        console.log(a4);

3. Espalhar em Objetos:
    - O conceito de espalhamento não se limita a arrays, funciona também em objetos.
    - Tudo que funciona para arrays, como concatenação, também funciona para objetos.
    
    - Espalhar não significa bagunçar, mas sim expandir. No contexto do spread, 
    ele expande os elementos de um array ou propriedades de um objeto.
*/

// É importante notar que o uso do operador de propagação é mais moderno e geralmente preferido por sua sintaxe concisa.
