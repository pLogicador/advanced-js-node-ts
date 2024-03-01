// Reduce - Reduzindo o array
/**
 * Utilizado para reduzir um array á um único elemento.
 * Com ela podemos fazer tanto filter quanto map (MAS NÃO É IDEAL)
 * 
 * A diferença os parametros dele para o filter e map é que ele possui um acumulador
 * com definição de valor inicial após as chaves
 * 
 * DICA:
 * - Se vc quer alterar todos ou alguns elementos do seu array original utilize o map
 * - Se vc quer filtrar todos ou alguns elementos do seu array utilize filter
 * - Se vc precisa reduzir seu array a um elemento só utillize reduce
 */

// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro do valores (map)

const numeros = [5, 50, 60, 5, 50, 2, 0, 80, 11, 6, 5, 4, 10, 101, 84];

// reduce para a solução 1
const total = numeros.reduce((acumulador, valor) => {
    return acumulador += valor;
}, 0);
console.log(total);

// reduce para a solução 2
const paresReduce = numeros.reduce((acumulador, valor) => {
    if (valor%2 == 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(paresReduce);

const somandoParesReduce = numeros.reduce((acumulador, valor) => {
    if (valor%2 == 0) {
        acumulador += valor
    }
    return acumulador;
}, 0);
console.log(somandoParesReduce);

// reduce para a solução 3
const dobroReduce = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor*2);
    return acumulador;
}, []);
console.log(dobroReduce);



// Retorne a pessoa mais velha
const pessoas = [
    { nome:'Pedro', idade:24 },
    { nome:'Rodrigo', idade:48 },
    { nome:'Maria', idade:20 },
    { nome:'Stephane', idade:90 },
    { nome:'Mario', idade:55 },
    { nome:'Evellyn', idade:15 },
    { nome:'Amiltom', idade:64 }
];

const maisVelha = pessoas.reduce((acumulador, valor)=>{

    if (acumulador.idade > valor.idade) return acumulador;  
    return valor;
});

console.log(maisVelha);
/**
    Parâmetros da Função:

acumulador: O acumulador mantém o resultado intermediário durante as iterações.
valor: Cada elemento do array durante as iterações.

    Detalhes das Iterações:

    1ª Iteração:

    acumulador: { nome:'Pedro', idade:24 }
    valor: { nome:'Rodrigo', idade:48 }
    Verifica-se que a idade de Rodrigo (48) é maior que a de Pedro (24), então retorna { nome:'Rodrigo', idade:48 } como novo acumulador.

    2ª Iteração:

    acumulador: { nome:'Rodrigo', idade:48 }
    valor: { nome:'Maria', idade:20 }
    A idade de Rodrigo (48) ainda é maior que a de Maria (20), então o acumulador não é alterado.

    3ª Iteração:

    acumulador: { nome:'Rodrigo', idade:48 }
    valor: { nome:'Stephane', idade:90 }
    Agora, a idade de Stephane (90) é maior que a de Rodrigo (48), então { nome:'Stephane', idade:90 } torna-se o novo acumulador.

    4ª a 7ª Iterações:

    O mesmo processo é repetido para os demais elementos do array.

Resultado Final:
Após todas as iterações, o resultado final será o objeto que representa a pessoa mais velha: { nome:'Stephane', idade:90 }.
Essencialmente, a função reduce está comparando as idades de cada pessoa, 
atualizando o acumulador com a pessoa mais velha em cada iteração, 
e retornando o objeto que representa a pessoa mais velha no array.

OBS: O acumulador não é o mesmo que o valor, mas sim uma variável que mantém o resultado acumulado durante as iterações da função reduce. 
Na primeira iteração, o acumulador é inicializado com o primeiro elemento do array ({ nome:'Pedro', idade:24 }). 
Nas iterações seguintes, o acumulador é atualizado com base nas comparações de idade.
 */