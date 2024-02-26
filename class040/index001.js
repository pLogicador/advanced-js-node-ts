// Break e continue
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

for (let n of numbers){

    if (n === 2 || n === 5) {
        console.log('pulei!');
        continue;   // pula para o proximo bloco ou iteração e continua
    }

    console.log(n);

    if (n === 7) {
        console.log('cheguei ao 7, vamos parar!')
        break;  // quebra o laço automaticamente e para a iteração
    }
}

// pode ser aplicado em todos os for's, como while e do while