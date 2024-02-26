const currentDate = new Date();
const h1 = document.querySelector('.container h1');

function leftZero (num) {
    return num >= 10 ? num : `0${num}`;
}

function getDayWeekText(numbDay) {
    const days = [ 'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 
    'Quinta-feira', 'Sexta-feira', 'Sábado'];

    return days[numbDay];
}

function getMonthName(numbMonth) {
    const months = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return months[numbMonth];
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