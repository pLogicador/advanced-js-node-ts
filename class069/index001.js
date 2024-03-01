// forEach
/**
 * Só disponível em arrays
 */
const a1 = [10, 20, 30, 40, 50];

// Usando forEach para imprimir os valores, índices e array
a1.forEach((valor, indice, array) => {
    console.log(`Valor: ${valor}, Índice: ${indice}, Array: [${array}]`);
});

// Usando forEach para simular uma operação de reduce (somar os valores)
let total = 0;
a1.forEach((valor) => {
    total += valor;
});
console.log(`Total: ${total}`);