// Objeto Map()
/*
 * A estrutura Map() em JS é utilizada para mapear chaves e valores, sendo diferente
 * de Array.map(). No exemplo abaixo, exploramos como usar Map() para armazenar informações de
 * pessoas, usando o 'id' como identificador e o objeto completo como valor associado.
 * 
 * Estrutura de Dados:
 * - O Map() mantém a ordem de inserção, diferentemente de um objeto padrão, onde a ordem
 *   não é garantida.
 * - As chaves em um Map() podem ser de qualquer tipo, enquanto em um objeto JS, elas são
 *   convertidas para strings.
 * 
 * Vantagens do Map():
 * - Manutenção da Ordem: A ordem de inserção é mantida, o que é útil em cenários onde a
 *   ordem dos elementos é relevante.
 * - Tipos Diversos como Chave: Permite utilizar qualquer tipo como chave, incluindo objetos
 *   e outros tipos complexos.
 * - Facilidade em Operações de CRUD: O Map() fornece métodos específicos para operações
 *   como adição, leitura, atualização e remoção de pares chave-valor.
 * 
 * Exemplo de Uso:
 * - Criamos um Map chamado 'novasPessoas' onde o 'id' é usado como chave e o objeto completo
 *   é o valor associado.
 * - Demonstramos como obter informações do Map(), fazer iterações, obter chaves e valores, e
 *   realizar operações CRUD, como deletar um elemento pelo 'id'.
 * 
 * Observação:
 * - O uso de Map() é particularmente benéfico quando se lida com grandes conjuntos de dados
 *   ou quando a ordem de inserção e a diversidade nas chaves são cruciais.
 */

const pessoas = [
    {id: 3, nome: 'Natan'},
    {id: 2, nome: 'Pedro'},
    {id: 1, nome: 'Helloah'},
];
/*
const novasPessoas = {};
for (const {id, nome} of pessoas){
    novasPessoas[id] = {id, nome};
}

// outra maneira de fazer o destruct // o problema é que precisamos converter para Number e deixar na ordem correta
const novasPessoas = {};
for (const p of pessoas){
    const {id} = p;
    novasPessoas[id] = {...p};
}
*/

// solução da ordem
// Criando um Map e populando-o com as informações das pessoas
const novasPessoas = new Map();
for (const p of pessoas){
    const {id} = p;
    novasPessoas.set(id, {...p});
}

// Exibindo o Map completo e obtendo informações específicas
console.log(novasPessoas);
console.log(novasPessoas.get(2));

// Iterando sobre as chaves e valores do Map
for(const [identifier, {id, nome}] of novasPessoas){
    console.log(identifier, id, nome);
}

// Alternativas para iteração: pegando o objeto completo, as chaves ou os valores
for(const pessoas of novasPessoas){
    console.log(pessoas);
}
for(const pessoas of novasPessoas.keys()){
    console.log(pessoas);
}
for(const pessoas of novasPessoas.values()){
    console.log(pessoas);
}

// Realizando uma operação de remoção (delete) pelo 'id'
novasPessoas.delete(2);
console.log(novasPessoas);

