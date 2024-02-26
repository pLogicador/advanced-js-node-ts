// Escapando caracteres especiais
let umaString1 = 'Um "texto"';  // Uso de aspas duplas dentro de aspas simples
let umaString2 = 'Um \t texto';  // Inserindo um caractere de tabulação
let umaString3 = 'Um \\ texto';  // Inserindo uma barra invertida

console.log(umaString1);
console.log(umaString2);
console.log(umaString3);

// Strings são indexadas
let nome = 'p Miranda';

console.log(nome[4]);              // Acessando o caractere no índice 4
console.log(nome.charAt(4));       // Usando charAt para obter o mesmo resultado

// Concatenando strings
console.log(nome.concat(' Olá mundo!'));

// Pesquisando por índices
console.log(nome.indexOf('p'));     // Encontrando o índice da letra 'p'
console.log(nome.indexOf('a', 3));  // Procurando 'a' a partir do índice 3

// Pesquisa reversa
console.log(nome.lastIndexOf('a', 8)); // Pesquisando 'a' do final para o início

// Expressões regulares
console.log(nome.match(/[a-z]/g)); // Encontrando todas as letras minúsculas
console.log(nome.search(/[a-z]/g)); // Procurando a primeira letra minúscula (semelhante a indexOf)

// Substituindo caracteres
console.log(nome.replace('p', 'oi'));     // Substituindo a primeira ocorrência de 'p'
console.log(nome.replace(/p/, 'oi'));     // Usando expressão regular para substituir 'p'
console.log(nome2.replace(/r/g, '#'));    // Substituindo todas as ocorrências de 'r' por '#'

// Tamanho da string (incluindo espaços em branco)
console.log(nome2.length);

// Fatiando strings
console.log(nome2.slice(2, 7));   // Obtendo uma parte da string (índice 2 a 6)
console.log(nome2.slice(-5));     // Obtendo os últimos 5 caracteres

// Transformando em maiúsculo/minúsculo
console.log(nome2.toUpperCase());
console.log(nome2.toLowerCase());

// Dividindo strings com base em um caractere
console.log(nome2.split(' '));    // Dividindo em palavras
console.log(nome2.split('a'));     // Dividindo sempre que encontrar a letra 'a'
console.log(nome2.split(' ', 2));  // Limitando a divisão a 2 partes