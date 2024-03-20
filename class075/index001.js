// Manipulando prototypes
// De forma literal
// Voce pode criar infinitas cadeias de A...Z
/**
 * Em JS, é possível manipular protótipos para estabelecer cadeias de herança entre objetos.
 * Ao criar objetos de forma literal, o JS automaticamente chama a função construtora
 * correspondente (por exemplo, new Object() para objetos literais). Isso significa que cada objeto
 * tem um protótipo que é a instância do seu construtor ou uma referência ao protótipo predefinido
 * (como Object.prototype).
 */

// Criando objetos de forma literal com uma cadeia de herança
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype (gerado automaticamente)
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};

// Criando um objeto usando o construtor Object e adicionando uma chave
const objC = new Object();
objC.chaveC = 'C';

// Estabelecendo uma cadeia de herança entre os objetos objB e objA
Object.setPrototypeOf(objB, objA); 

// Estabelecendo uma cadeia de herança entre os objetos objC e objB
Object.setPrototypeOf(objC, objB); 

// Agora podemos acessar a chave 'A' a partir do objeto objB
console.log(objB.chaveA);   // Saída: 'A'

/**
 * Nota: Evite o uso direto de __proto__ para manipulações de protótipos.
 * Em vez disso, utilize Object.getPrototypeOf(obj) para obter o protótipo de um objeto.
 */
