// outra forma de fazer a mesma tarefa
const ELEMENTS = [ // declarando um array de objetos
    { tag: 'p', text: 'text 01'},         // 0
    { tag: 'DIV', text: 'text 02'},       // 1
    { tag: 'footer', text: 'text 03'},    // 2
    { tag: 'section', text: 'text 04'}    // 3
];

const CONTAINER = document.querySelector('.container');
const DIV = document.createElement('div');

for (let i = 0; i <= ELEMENTS.length-1; i++) {
    let {tag, text} = ELEMENTS[i];
    let tagCreate = document.createElement(tag);
    let textCreate = document.createTextNode(text); // criando um nó de texto no HTML
    
    tagCreate.appendChild(textCreate);
    DIV.appendChild(tagCreate);
}

CONTAINER.appendChild(DIV);
