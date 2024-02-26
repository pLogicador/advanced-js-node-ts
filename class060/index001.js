// Funções recursivas
/*
    Uma função recursiva é uma função que chama a si mesma durante sua execução. No exemplo abaixo,
    a função 'recursiva' imprime o valor de 'max' e, em seguida, chama a si mesma com um valor incrementado.

    É importante definir uma condição de parada para evitar uma chamada recursiva infinita. No exemplo,
    a condição 'if (max >= 10) return;' impede que a função continue chamando a si mesma quando 'max' atinge 10.

    Em alguns casos, ao utilizar funções recursivas, pode-se encontrar o erro 'maximum call stack size exceeded',
    que ocorre quando há um número excessivo de chamadas recursivas, excedendo o limite do tamanho da pilha de chamadas.

    Nota: Para contextos específicos, como navegadores, existe um limite de recursividade para evitar estouro de pilha.
*/

function recursiva(max) {
    console.log(max);

    if (max >= 10) return; // Condição de parada
    max++;
    recursiva(max); // Chamada recursiva
}

// Chamando a função recursiva com um valor inicial
recursiva(-10);
