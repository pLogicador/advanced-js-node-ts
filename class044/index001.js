// tratando e lançando erros (try, catch, throw)
/*
// tentar
try {
    console.log(notExist);
} catch (err) {
    console.log(`variável não definida`);
    //console.log(err); // Não mostre o erro para o susuário final(caso para back-end), trate-a
}
*/

function sum(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error("it's NaN");  // lançando um erro
    }
    return n1+n2;
}


// se houver erro no bloco try catch será executado e senão apenas o try é executado
try {
    console.log(sum(5, 10));
    console.log(sum('a', 10));
} catch(error) {
    //console.log(error);
    console.log('Algo Amigável para user.');
}