/*
// Exportando exemplo 1
// Exportamos várias constantes e uma função de soma do módulo
const nome = 'Pedro';
const sobrenome = 'Miranda';
const idade = 22;

function soma(x, y) {
    return x + y;
}

export { nome, sobrenome as sobrenome2, idade, soma};
*/
/*
// Exportando diretamente na criação exemplo 2
// Exportamos constantes e uma classe diretamente na sua declaração
export const nome = 'Pedro';
export const sobrenome = 'Miranda';
export const idade = 22;
const cpf = 'asasas';   // variável constante privada pois não foi exportada 

// Exportamos a função de soma e uma classe Pessoa
export function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// Exportamos uma função de soma por padrão
export default function soma2(x, y) {
    return x + y;
}
*/
/*
// Exemplo 4: Exportando padrão
// Exportamos uma função de soma com um alias para ser o membro padrão
const nome = 'Pedro';
const sobrenome = 'Miranda';
const idade = 22;

function soma(x, y) {
    return x + y;
}


export {nome, sobrenome, idade, soma as default}
*/

// Exportando nome, sobrenome e idade 
const nome = 'Pedro';
const sobrenome = 'Miranda';
const idade = 22;

export {nome, sobrenome, idade}

// Exportando uma função de multiplicação como padrão
export default (a, b) => a * b ;


