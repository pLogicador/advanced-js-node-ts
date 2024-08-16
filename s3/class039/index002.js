function randomMinMax(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const MIN = 1;
const MAX = 50;
let rand = randomMinMax(MIN, MAX);


while (rand !== 10) { // checando a condição enquanto for verdadeira
    rand = randomMinMax(MIN, MAX);
    console.log(rand);
}

console.log('\n\n');

do { // executa pelo menos uma vez o bloco de código para depois verificar a condição
    rand = randomMinMax(MIN, MAX);
    console.log(rand);

} while (rand !== 10 );