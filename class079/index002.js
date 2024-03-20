// Factory Functions + Prototypes
/*
 * Neste script, exploramos a transição de uma abordagem acoplada para uma abordagem de composição,
 * proporcionando maior flexibilidade e reutilização de comportamentos específicos (métodos) em objetos.
 * 
 * Abordagem Inicial (Acoplada):
 * - Utilizamos um objeto 'pessoaPrototype' contendo vários métodos (falar, comer, beber).
 * - Criamos objetos de pessoa diretamente com base nesse prototype, acoplando assim todas as funcionalidades.
 * - Isso pode resultar em um acoplamento excessivo e menos flexibilidade para reutilização se quisermos
 *   compartilhar métodos entre diferentes objetos que não são do mesmo tipo.
 * 
 * Refatoração (Desacoplada com Composição):
 * - Criamos objetos individuais (falar, comer, beber) que representam comportamentos específicos.
 * - Combinamos esses objetos usando o operador spread ou Object.assign para criar 'pessoaPrototype'.
 * - Agora, temos a flexibilidade de compor diferentes conjuntos de comportamentos para diferentes tipos de objetos.
 * - A função 'criaPessoa' utiliza 'pessoaPrototype' como protótipo para criar objetos pessoa sem acoplar
 *   diretamente todos os métodos a cada instância de pessoa.
 * - Isso promove uma abordagem mais modular e desacoplada.
 * 
 * Resultado:
 * - As instâncias de pessoa (como p1) agora possuem apenas referências para os métodos necessários,
 *   permitindo uma estrutura mais limpa e reutilizável.
 * - Essa abordagem é especialmente útil quando diferentes objetos compartilham comportamentos comuns
 *   sem precisar herdar diretamente de uma única cadeia de protótipos.
 */

// Definição de comportamentos específicos
const falar = {
    falar(){
        console.log(`${this.nome} está falando`);
    }
};

const comer = {
    comer(){
        console.log(`${this.nome} está comendo`);
    }
};

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
};

// Composição de comportamentos para criar o protótipo
const pessoaPrototype = {...falar, ...comer, ...beber}; // ou // const pessoaPrototype = Object.assign({}, falar, comer, beber);

// Função Factory para criar objetos pessoa
function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome:{value: nome},
        sobrenome:{value: sobrenome}
    });
}

// Exemplo de uso
const p1 = criaPessoa('Pedro', 'Miranda');
p1.falar();
p1.comer();
p1.beber();

