// ES6 Modules - Import/Export
/*
// Exemplo 1: Importando especificamente
// Importando membros específicos do módulo './module1'
import { nome as nome2, sobrenome2, idade, soma, Pessoa } from './module1';

const nome = 'George';

console.log(nome, nome2, sobrenome2, idade);
console.log(soma(5,5));


const p1 = new Pessoa('Lucas', 'David');
console.log(p1);

*/
/*
// Exemplo 2: Importando tudo
// Importando todo o conteúdo do módulo './module1' como um objeto MeuModulo
import * as MeuModulo from './module1';

console.log(MeuModulo);
*/
/*
// Exemplo 3: Importando o padrão
// Importando o membro padrão (default) do módulo './module1' com qualquer nome desejado
import qualquerNome from './module1';

console.log(qualquerNome(10,10));
*/
/*
// Exemplo 4: Importando o padrão com outra sintaxe
// Importando o membro padrão (default) do módulo './module1' diretamente sem especificar um nome
import soma from './module1';

console.log(soma(5, 5));
console.log(produto(2, 5))
*/
// Exemplo 5: Importando o padrão e membros específicos
// Importando o membro padrão (default) e membros específicos do módulo './module1'
import produto, {nome, sobrenome} from './module1';

console.log(produto(5, 5));
console.log(nome);