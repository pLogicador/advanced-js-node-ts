/* https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model */



/*

- Manipulação do DOM com Objetos do Navegador

O Document Object Model (DOM) é uma representação hierárquica da estrutura de um documento HTML. 
Ele começa com o objeto de nível superior, 'window', que funciona como o pai de toda a hierarquia.

- window (top-level parent)
    - document (parent of HTML)
        - html (child of document, parent of head and body)
            - head
            - body (child of html)
                - section (child of body)
                    - h1 (child of section)
                        - "..." (text node, child of h1)

Nesta hierarquia:
- O objeto 'window' representa toda a janela do navegador.
- O objeto 'document' representa o documento HTML e serve como ponto de entrada para acessar e manipular seu conteúdo.
- O elemento 'html' é filho do 'document' e atua como um contêiner para os elementos 'head' e 'body'.
- Os elementos 'head' e 'body' são ambos filhos de 'html', sendo que 'head' geralmente contém metainformações e 'body' contém o conteúdo principal do documento.
- Dentro do 'body', elementos específicos como 'section' e 'h1' formam uma estrutura aninhada para organizar o conteúdo.
- O "..." (nó de texto) representa o conteúdo de texto real dentro de um elemento 'h1'.

*/