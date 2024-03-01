// versão simpificada
const numeros = [5, 50, 60, 5, 50, 2, 0, 80, 11, 6, 5, 4, 10, 101, 84];

const paresDobroTotal = numeros
    .filter(valor =>valor%2 == 0)
    .map(valor=> valor * 2)
    .reduce((acumulador, valor)=> acumulador + valor);

console.log(paresDobroTotal);