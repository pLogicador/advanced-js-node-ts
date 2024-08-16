/* tratando e lançando erros (try, catch, finally)

try {
    // executado quando não houver erros
} catch (e) {
    // executado quando houver erros
} finally {
    // executado sempre
}

*/


try {
    //console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {
        console.log(b);
    } catch (err) {
        console.log('Deu erro');
    } finally {
        console.log('também sou finally');
    }


} catch (e) {
    console.log('tratando o erro');
} finally {
    console.log('sou sempre executado');
}