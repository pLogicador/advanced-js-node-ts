// Object.defineProperty() -> Getter e Setters
/**
 * Em JS, a função Object.defineProperty() pode ser utilizada para definir propriedades
 * com métodos getters e setters personalizados. Esses métodos permitem um controle mais preciso
 * sobre o acesso e a atribuição de valores a uma propriedade.
 */

// Exemplo utilizando Object.defineProperty() com getters e setters
function Produto(nome, preco, estoque){
    // Definindo propriedades nome e preco de forma convencional
    this.nome = nome;
    this.preco = preco;
    
    // Utilizando Object.defineProperty() para criar uma propriedade 'estoque' com getter e setter
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        // Getter: Obtém o valor da propriedade
        get: function(){
            return estoquePrivado;
        },

        // Setter: Define o valor da propriedade com validação
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Não é um Number');
            }

            estoquePrivado = valor;
        }
    });
}

// Exemplo utilizando getters e setters em um objeto criado com uma função de fábrica
function criaProduto(nome){
    return {

        // Getter para a propriedade nome
        get nome(){
            return nome;
        },
        // Setter para a propriedade nome com manipulação do valor
        set nome(valor){
            valor = valor.replace('coisa', ' ');     // Remove a palavra 'coisa' do valor
            nome = valor;
        }
    };
}

// Exemplos de utilização
/*
const p1 = new Produto('Calça',50, 6 );
//console.log(p1);
p1.estoque = 'asasasas';    // Lança um erro devido à validação no setter
console.log(p1.estoque);
*/

const p2 = criaProduto('Camiseta');
p2.nome = 'qualquer coisa'; // Utiliza o setter personalizado para manipular o valor
console.log(p2.nome);   // Retorna 'qualquer'