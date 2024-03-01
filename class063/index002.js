const nomes  = ['Maria', 'Miranda', 'George', 'Lucas', 'Vinicius'];

/*
// simulando pop
const removidos = nomes.splice(-1, 1);
*/
/*
// simulando shift
const removidos = nomes.splice(0, 1);
*/
/*
// simulando o push
nomes.splice(nomes.length, 0, 'MMMMM', 'MMM');
*/
// simulando o unshift
nomes.splice(0, 0, 'MMMMM', 'MMM');

console.log(nomes);