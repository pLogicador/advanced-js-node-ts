/*
DOM - Document Object Model
BOM - Browser Object Model

O DOM é a representação estruturada e hierárquica de um documento HTML, 
permitindo a interação e modificação dinâmica dos elementos da página.

O BOM, por outro lado, refere-se à interface do navegador fora 
do contexto do documento. Ele fornece objetos e métodos 
para interagir com características específicas do navegador, 
como janelas, histórico de navegação e outros recursos.

No script abaixo, estamos utilizando o DOM para criar 
elementos HTML dinamicamente e adicioná-los a 
um container existente na página. 
Enquanto o DOM se refere aos elementos do documento, 
o BOM geralmente se refere a recursos e objetos relacionados ao navegador.

*/

const ELEMENTS = [ // declarando um array de objetos
    { tag: 'p', text: 'text 01'},         // 0
    { tag: 'DIV', text: 'text 02'},       // 1
    { tag: 'footer', text: 'text 03'},    // 2
    { tag: 'section', text: 'text 04'}    // 3
];

// Selecionando o container existente na página usando querySelector
const CONTAINER = document.querySelector('.container');

// Criando um novo elemento 'div' para armazenar os elementos dinâmicos
const DIV = document.createElement('div');


// Iterando sobre o array ELEMENTS para criar e adicionar os elementos dinâmicos
for (let i = 0; i <= ELEMENTS.length-1; i++) {
    // Desestruturando o objeto para obter a tag e o texto
    // E criando um novo elemento com a tag especificada
    let {tag, text} = ELEMENTS[i];
    let tagCreate = document.createElement(tag);

    // Adicionando texto ao elemento criado (pode ser innerText ou innerHTML)
    tagCreate.innerText = text; // innerText é mais seguro!

    // Adicionando o elemento criado à div
    DIV.appendChild(tagCreate);
}

// Adicionando a div, agora contendo os elementos dinâmicos, ao container na página
CONTAINER.appendChild(DIV);

// Exemplo de acesso a propriedade do BOM (Window)
console.log('Largura da janela:', window.innerWidth);
