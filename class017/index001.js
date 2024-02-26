// Funções (básico)
// Argumentos com valor padrão
function sum(firstRnumber = 1, secondLnumber = 1) { // Tudo dentro do corpo está protegido
    const result = firstRnumber + secondLnumber;
    return result;  // A engine do js não permite que um valor abaixo do return seja exibido
}

console.log(`O resultado é ${sum(2, 3)}`);

// Ao declarar uma variável atribuindo uma função a ela utilizamos ';'
const raiz = function (n) {
    return n ** 0.5;
};

// Array function simplifica a função tradicional
const exemploRaiz1 = (n) => {
    return n ** 0.5;
};

const exemploRaiz2 = n => n ** 0.5;  // pode eliminar os parenteses quando houver apenas 1 parametro
