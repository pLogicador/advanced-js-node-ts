// Atribuição via Desestruturação

// Exemplo 1: Desestruturação de objeto como parâmetro
function funcao({nome, sobrenome, idade}) {
    // Desestruturação nos parâmetros permite extrair valores diretamente de um objeto
    console.log(nome, sobrenome, idade);
}

funcao({nome:'Pedro', sobrenome:'Miranda', idade:45}); // Enviando um objeto literal como argumento

// Ou utilizando uma variável
let obj = {nome:'Pedro', sobrenome:'Miranda', idade:45};
funcao(obj);

// Exemplo 2: Desestruturação de array como parâmetro
function funcao2([v1, v2, v3]) {
    // Desestruturação nos parâmetros permite extrair valores diretamente de um array
    console.log(v1, v2, v3);
}
funcao2(['Pedro', 'Miranda', 34]);

// Exemplo 3: Rest Operator para lidar com número variável de argumentos
function conta(operador, acumulador, ...numeros) {
     // O rest operator (...) permite capturar todos os argumentos restantes em um array
    for(let n of numeros) {
        if (operador === '+') acumulador += n;
        if (operador === '-') acumulador -= n;
        if (operador === '*') acumulador *= n;
        if (operador === '/') acumulador /= n;

    }
    console.log(acumulador);
}

conta('*',   1,   5,5);

// Observação: O rest operator deve ser utilizado no último parâmetro da função
