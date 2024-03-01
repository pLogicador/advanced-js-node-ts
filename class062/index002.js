// Convertendo entre String e Array
/*
    Em JS, é comum precisarmos converter entre strings e arrays. Isso pode ser útil em várias situações,
    como manipulação de dados e formatação de saídas.

    - Convertendo String para Array:
        - Utilizamos o método split para dividir uma string em um array, com base em um separador específico.
        - Exemplo: const nome = 'Pedro Emanuel Miranda';
                    const nomes = nome.split(' ');
                    console.log(nomes);

        - Também podemos usar o método split para separar valores por vírgula ou qualquer outro caractere.
        - Exemplo:  const nome2 = 'Pedro, Emanuel, Silva, Miranda';
                    const nomes2 = nome2.split(', ');
                    console.log(nomes2);

    - Convertendo Array para String:
        - Utilizamos o método join para unir os elementos de um array em uma única string, utilizando um separador.
        - Exemplo:  const nomes3 = ['Pedro', 'Emanuel', 'Miranda'];
                    const nome3 = nomes3.join(' ');
                    console.log(nome3);

    Esses métodos são bastante úteis para manipular dados de forma eficiente, seja convertendo uma 
    lista de nomes para um formato específico ou dividindo uma string em partes distintas.
*/

const nome = 'Pedro Emanuel Miranda';
const nomes = nome.split(' ');

console.log(nome);
console.log(typeof nome);
console.log(nomes);
console.log(typeof nomes);

const nome2 = 'Pedro, Emanuel, Silva, Miranda';
const nomes2 = nome2.split(', '); // separando por vírgula e espaço

console.log(nomes2);

const nomes3 = ['Pedro', 'Emanuel', 'Miranda'];
const nome3 = nomes3.join(' '); // definindo o elemento separador

console.log(nome3);
console.log(typeof nome3);
