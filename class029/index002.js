// Eliminando os break's

function getDayWeekText(dia) {
    let diaSemText = '';

    switch (dia) {
        case 0:
            diaSemText = 'Dom';
            return diaSemText;
        case 1:
            diaSemText = 'Seg';
            return diaSemText;
        case 2:
            diaSemText = 'Ter';
            return diaSemText;
        case 3:
            diaSemText = 'Qua';
            return diaSemText;
        case 4:
            diaSemText = 'Qui';
            return diaSemText;
        case 5:
            diaSemText = 'Sex';
            return diaSemText;
        case 6:
            diaSemText = 'Sáb';
            return diaSemText;
        default:
            diaSemText = 'Dia inválido';
            return diaSemText;
    }
}

const data = new Date('1987-02-20 00:00:00');
const diaSem = data.getDay();
const diaSemText = getDayWeekText(diaSem);


console.log(diaSem, diaSemText);