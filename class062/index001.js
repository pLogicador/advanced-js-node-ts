// Revisão do básico em Arrays
/*
    Arrays em JavaScript são estruturas que armazenam elementos ordenados. Eles podem 
    conter diferentes tipos de dados, como strings, objetos, funções e números.

    - Valor por referência: Arrays são passados por referência, o que significa que 
    manipulações em um array afetam todas as referências a esse array.

    - Métodos de manipulação de arrays:

        - Modificando elementos:
            - Atribuição direta: nomes[2] = 'Maria';
            - Remoção com 'delete': delete nomes[2];

        - Cópia de arrays:
            - Cópia sem referência: const nomes2 = [...nomes];

        - Remoção e adição de elementos:
            - Remoção do último elemento: const removeUltimo = nomes.pop();
            - Remoção do primeiro elemento: const removeInicio = nomes.shift();
            - Adição ao final do array: nomes.push('João', 'Wallace');
            - Adição no início do array: nomes.unshift('Matusálem');

        - Cópia de parte do array:
            - Copiando parte do array: const novo3 = nomes.slice(0, -1);

    Esses são alguns métodos básicos, mas existem muitos outros para manipulação avançada de arrays em JS.
*/

//const nomes = new Array('Pedro','George', 'Ana'); // semelhante, utilizando o construtor
const nomes = ['Pedro', 'George', 'Ana', 'Gustavo', 'Breno', 'William']; // mais simplificado

// Modificando elementos
nomes[2] = 'Maria';
delete nomes[2]; 

console.log(nomes);

// Cópias de arrays
const nomes2 = [...nomes];
console.log(nomes2);

// Remoção e adição de elementos
const removeUlltimo = nomes.pop(); 
const removeinicio = nomes.shift();
nomes.push('João');     
nomes.push('Wallace');


console.log(removeUlltimo);
console.log(removeinicio);
console.log(nomes);


// Cópia de parte do array
const novo3 = nomes.slice(0, -1); 

console.log(novo3);