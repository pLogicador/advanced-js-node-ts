// Solution 1
const currentDate = new Date();
const headerTitle = document.querySelector('.container h1');

function padWithZero(number) {
    return number < 10 ? `0${number}` : number;
}

function getDayOfWeekName(day) {
    switch (day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return '';
    }
}

function getMonthName(month) {
    switch (month) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
        default:
            return '';
    }
}

function formatDate(date){
    const dayOfWeek = date.getDay();
    const monthNumber = date.getMonth();
    const dayOfWeekName = getDayOfWeekName(dayOfWeek);
    const monthName = getMonthName(monthNumber);

    return `${dayOfWeekName}, ${date.getDate()} ${monthName} ${date.getFullYear()} ` +
           `${padWithZero(date.getHours())}:${padWithZero(date.getMinutes())}`;
}

headerTitle.innerHTML = formatDate(currentDate);
