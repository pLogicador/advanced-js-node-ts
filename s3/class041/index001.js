// Escreva uma função que recebe 2 números e retorne o meior deles

const FIRST_VALUE = 50
const SECOND_VALUE = 90

function findTheBiggest1(n1, n2) {
    if (n1 > n2) {
        return n1;
    }
    return n2;
}

function findTheBiggest2(n1, n2) {
    return (n1 > n2) ? n1 : n2
}

const findTheBiggest3 = (n1, n2) => {
    return (n1 > n2) ? n1 : n2
}

const findTheBiggest4 = (n1, n2) => {
    return Math.max(n1, n2);
}

// ou 
const findTheBiggest5 = (n1, n2) => Math.max(n1, n2);


console.log(findTheBiggest5(FIRST_VALUE, SECOND_VALUE));