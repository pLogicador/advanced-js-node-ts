const currentDate = new Date();
const h1 = document.querySelector('.container h1');

function leftZero (num) {
    return num >= 10 ? num : `0${num}`;
}

function getDayWeekText(numbDay) {
    let dayText = '';

    switch (numbDay) {
        case 0:
            dayText = 'Domingo';
            return dayText;
        case 1:
            dayText = 'Segunda-feira';
            return dayText;
        case 2:
            dayText = 'Terça-feira';
            return dayText;
        case 3:
            dayText = 'Quarta-feira';
            return dayText;
        case 4:
            dayText = 'Quinta-feira';
            return dayText;
        case 5:
            dayText = 'Sexta-feira';
            return dayText;
        case 6:
            dayText = 'Sábado';
            return dayText;
        default:
            dayText = '';
            return dayText;
    }
}

function getMonthName(numbMonth) {
    let monthText = '';

    switch (numbMonth) {
        case 0:
            monthText = 'Janeiro';
            return monthText;
        case 1:
            monthText = `Fevereiro`;
            return monthText;
        case 2:
            monthText = `Março`;
            return monthText;
        case 3:
            monthText = `Abril`;
            return monthText;
        case 4:
            monthText = `Maio`;
            return monthText;
        case 5:
            monthText = `Junho`;
            return monthText;
        case 6:
            monthText = `Julho`;
            return monthText;
        case 7:
            monthText = `Agosto`;
            return monthText;
        case 8:
            monthText = `Setembro`;
            return monthText;
        case 9:
            monthText = `Outubro`;
            return monthText;
        case 10:
            monthText = `Novembro`;
            return monthText;
        case 11:
            monthText = `Dezembro`;
            return monthText;
        default:
            monthText = '';
            return monthText;
    }
}

function createDate(date){
    const weekDay = date.getDay();
    const numbMonth = date.getMonth();
    const nameDay = getDayWeekText(weekDay);
    const nameMonth = getMonthName(numbMonth);

    return (`${nameDay}, ${date.getDate()} de ${nameMonth} de ${date.getFullYear()} 
    ${leftZero(date.getHours())}:${leftZero(date.getMinutes())}`);
}

h1.innerHTML = createDate(currentDate);