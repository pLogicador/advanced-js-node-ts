// if else (2)

const valueNumber = 10;

// Apenas a primeira condição verdadeira do if será executada e logo em seguida segue-se o fluxo normal
if (valueNumber >= 0 && valueNumber <= 5 ) {
    console.log('O número está entre 0 e 5');
} else if (valueNumber >= 6 && valueNumber <= 8) {
    console.log('O número está entre 6 e 8');
} else if (valueNumber <= 11) { // verdadeiro
    console.log('O número é menor ou igual a 11'); 
} else if (valueNumber >= 9 && valueNumber <= 11) { // verdadeiro
    console.log('O número está entre 9 e 11');
} else {
    console.log('O número NÃO está entre 0 e 11');
}

console.log('...Segue o fluxo normal');