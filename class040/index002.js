const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

let i = 0
do {
    let n = numbers[i];

    if (n === 2) {
        console.log('pulei!');
        i++;
        continue;   // pula para o proximo bloco ou iteração e continua
    }

    console.log(n);

    if (n === 7) {
        console.log('cheguei ao 7, vamos parar!');
        break;  // quebra o laço automaticamente e para a iteração
    }

    i++; // lembre-se que sempre devemos atualizar a variável de controle
} while (i <= numbers.length-1);
