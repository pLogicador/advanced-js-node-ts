const contav2 = function (operador, acumulador, ...numeros) {
    for(let n of numeros) {
        if (operador === '+') acumulador += n;
        if (operador === '-') acumulador -= n;
        if (operador === '*') acumulador *= n;
        if (operador === '/') acumulador /= n;

    }
    console.log(acumulador);
};

contav2('*',   1,   5,5);

// OBS: O rest operator deve ser utilizado no último parâmetro da função

// Utilizando o Rest Operator em Arrow Function
const pegandoOsArgumentos = (...args) => {
    console.log(args);
};

console.log('*',   1,   5,5);
// Neste exemplo, o rest operator captura todos os argumentos restantes e os coloca em um array