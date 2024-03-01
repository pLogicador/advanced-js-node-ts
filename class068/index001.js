// filter + map + reduce (encadeados)

// Retorne a soma do dobro de todos os pares
/**
 * -> Filtrar pares
 * -> Dobrar os valores
 * -> Reduzir (somar tudo)
 */
const numeros = [5, 50, 60, 5, 50, 2, 0, 80, 11, 6, 5, 4, 10, 101, 84];

const paresDobroTotal = numeros.filter(valor => {
    return valor%2 == 0
}).map(valor=>{
    return valor * 2;
}).reduce((acumulador, valor)=>{
    return acumulador + valor
});


// Passos
// paao 1: [ 50, 60, 50,  2,  0, 80,  6,  4, 10, 84]           -> pares
// paao 2: [100, 120, 100,  4,   0, 160,  12,   8, 20, 168]    -> dobro 
// paao 3: 692 total                                           -> total

console.log(paresDobroTotal);
