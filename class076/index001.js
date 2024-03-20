// Herança
/**
 * Produto -> aumento, desconto
 * Camiseta = cor
 * Caneca = material
 */

// Classe base para produtos
function Item(inputName,inputPrice) {
    this.inputName = inputName;
    this.inputPrice = inputPrice;
}

// Métodos compartilhados por todos os produtos
Item.prototype.increase = function (amount) {
    this.inputPrice += amount;
};

Item.prototype.discount = function (amount) {
    this.inputPrice -= amount;
};

// Classe específica para camisetas
function Tshirts(inputColor, inputName, inputPrice){
    Item.call(this, inputName, inputPrice);
    this.inputColor = inputColor;
}

// Herança: Camiseta herda de Item
Tshirts.prototype = Object.create(Item.prototype);
Tshirts.prototype.constructor = Tshirts;

// Sobrescrevendo o método aumento para camisetas
Tshirts.prototype.increase = function(percentage){
    this.inputPrice = this.inputPrice + (this.inputPrice * (percentage / 100));
}

// Classe específica para canecas
function Bottle(inputMaterial, inputName, inputPrice, inputStock){
    Item.call(this, inputName, inputPrice);
    this.inputMaterial;

    Object.defineProperty(this, 'inputStock', {
        enumerable: true,
        configurable: false,

        get: function () {
            return inputStock;
        }, 
        set: function (inputValue){
            if (typeof inputValue !== 'number') return;
            inputStock = inputValue;
        }
    })
}

// Herança: Caneca herda de Item
Bottle.prototype = Object.create(Item.prototype);
Bottle.prototype.constructor = Bottle;

// Exemplo de uso
const produtoGenerico = new Item('Produto Genérico', 10.50);
const blusa = new Tshirts('black', 'Regata', 9.90);
const garrafa = new Bottle('Plástico', 'Garrafa de Água', 15.50, 25);

// Aplicando aumento aos produtos
produtoGenerico.increase(5);
blusa.increase(10);
garrafa.increase(3);

// Configurando estoque para a caneca
garrafa.inputStock = 150;

// Exibindo resultados
console.log(produtoGenerico);
console.log(blusa);
console.log(garrafa);
console.log(garrafa.inputStock);
