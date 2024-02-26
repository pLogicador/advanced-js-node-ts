// Atribuição via desestruturação (Objetos)
const people = {
    //name: 'Pedro',
    subname: 'Miranda',
    age: 20,
    endereco: {
        rua: 'Av Pelouro',
        numero: 95
    }
};

// Atribuição via Desestruturação
//const {name} = people;  // extrai desse objeto essa chave 'nome' e já cria essa variável chamada nome
//const {name = 'Não existe', subname} = people; // atribuindo um valor padrão
const {name: mudandoNome = 'Não existe'} = people; // especificando a chave e alterando o nome da variável
const {endereco: {rua: r, numero}, endereco} = people; 
const {age, ...resto} = people;


console.log(mudandoNome);
console.log(r, numero, endereco);
console.log(age, resto);