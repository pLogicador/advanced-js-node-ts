// Switch/Case
/*
    O "switch" é uma escolha adequada quando você precisa verificar o valor de uma única variável e compará-lo com múltiplos casos. 
    Ele torna o código mais legível e fácil de entender em situações onde há muitas comparações possíveis.

    OBS: Embora o "switch" seja útil em casos específicos, em situações mais complexas ou com múltiplas condições, outras estruturas 
    como if-else encadeados ou estruturas de controle mais avançadas podem ser mais apropriadas.

*/

const data = new Date('1987-02-12 00:00:00');
let diaSem = data.getDay();
diaSem = 0;
let diaSemText = '';

// Utilizando Switch/Case para verificar apenas uma variável
switch (diaSem) {
    case 0:
        diaSemText = 'Dom';
        break;
    case 1:
        diaSemText = 'Seg';
        break;
    case 2:
        diaSemText = 'Ter';
        break;
    case 3:
        diaSemText = 'Qua';
        break;
    case 4:
        diaSemText = 'Qui';
        break;
    case 5:
        diaSemText = 'Sex';
        break;
    case 6:
        diaSemText = 'Sáb';
        break;
    default:
        diaSemText = 'Dia inválido';
}

// Alternativa utilizando estrutura de controle if-else
/*
if (diaSem === 0) {
    diaSemText = 'Dom';
} else if (diaSem === 1) {
    diaSemText = 'Seg';
} else if (diaSem === 2) {
    diaSemText = 'Ter';
} else if (diaSem === 3) {
    diaSemText = 'Qua';
} else if (diaSem === 4) {
    diaSemText = 'Qui';
} else if (diaSem === 5) {
    diaSemText = 'Sex';
} else if (diaSem === 6) {
    diaSemText = 'Sáb';
} else {
    diaSemText = 'Inválido';
}
*/

console.log(diaSem, diaSemText);
