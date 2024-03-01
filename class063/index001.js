// Método splice
/*
O método splice é uma ferramenta poderosa para manipular arrays em JavaScript. Ele permite não apenas remover elementos
de um array, mas também adicionar novos elementos no lugar.

- Removendo do Início:
    - O método splice(indice, qtdRemovidos) remove elementos a partir do índice especificado.
    - Exemplo: 
    const nomes = ['Maria', 'Miranda', 'George', 'Lucas', 'Vinicius'];
    const removidos = nomes.splice(2, 3);
    console.log(nomes, removidos);

- Removendo do Final:
    - Podemos usar índices negativos para contar a partir do final do array.
    - Exemplo: 
        const nomes2 = ['Maria', 'Miranda', 'George', 'Lucas', 'Vinicius'];
        const removidosDoFinal = nomes2.splice(-2, 2);
        console.log(nomes2, removidosDoFinal);

- Removendo Até o Fim:
    - Utilizando Number.MAX_VALUE como quantidade a ser removida, podemos remover elementos até o final do array.
    - Exemplo: 
        const nomes3 = ['Maria', 'Miranda', 'George', 'Lucas', 'Vinicius'];
        const removidos3 = nomes3.splice(-2, Number.MAX_VALUE);
        console.log(nomes3, removidos3);

- Adicionando sem Remover:
    - Podemos adicionar elementos em posições específicas sem remover nenhum elemento usando o método splice.
    - Exemplo: 
        const nomes4 = ['Maria', 'Miranda', 'George', 'Lucas', 'Vinicius'];
        const removidos4 = nomes4.splice(2, 0, 'MMM');
        console.log(nomes4, removidos4);

- Adicionando e Removendo ao Mesmo Tempo:
    - Ao passar uma quantidade maior que zero para qtdRemovidos, o método splice 
    substituirá os elementos removidos pelos adicionados.
    - Exemplo: 
        const removidos5 = nomes4.splice(2, 1, 'OI'); // alterando o mesmo índice
        console.log(nomes4, removidos5);

Lembre-se, o método splice altera o array original e retorna um array contendo os elementos removidos.
*/

/*
const nomes  = ['Maria', 'Miranda', 'George', 'Lucas', 'Vinicius'];

// splice( indice, QtdRemovidos, QtdAdicionar );

const removidos = nomes.splice(2, 3); // remove do índice 2 um elemento; // retorna um array pois pode remover mais de 1 elemento
console.log(nomes, removidos);
*/
/*
// REMOVENDDO DO FINAL
// splice( indice, QtdRemovidos, QtdAdicionar );

const nomes2  = ['Maria', 'Miranda', 'George', 'Lucas', 'Vinicius'];

const removidosDofinal = nomes2.splice(-2, 2);
console.log(nomes2, removidosDofinal);
*/
