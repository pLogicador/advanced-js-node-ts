// for clássico - Estrutura de Repetição
/*
Sempre que a condição for avaliada como verdadeira prossegue-se com o loop 
e a iteração até que sua condição torne-se falsa

OBS1: a variável 'i' (index) não é redeclarada nas próximas iterações pois 
a cada iteração ele verifica da segunda condição para a iteração

OBS2: na condição de incremento pode-se incrementar-decrementar na ordem 
que desejar, do maior para o menor, do menor para o maior, 
pulando de quantas e quantas vezes desejar
*/

for (let i = 1; i <= 10; i+=1) {
    const isPar = i%2 === 0 ? 'is par': 'is impar';
    console.log(i, isPar);
}
console.log('\n\n');

// percorrendo array
const frutas = ['maçã', 'uva', 'limão', 'goiaba', ''];

for (let i = 0; i <= frutas.length-1; i++) { // ou (; i < frutas.length; ;)
    console.log(`frutas[${i}]: ${frutas[i]}`);
}