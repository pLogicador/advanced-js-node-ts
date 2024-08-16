// Solution 3
const currentDate = new Date();
const headerElement = document.querySelector('.container h1');

function padZero(number) {
    return number < 10 ? `0${number}` : number;
}

function getDayName(dayIndex) {
    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
        'Thursday', 'Friday', 'Saturday'
    ];
    return daysOfWeek[dayIndex];
}

function getMonthName(monthIndex) {
    const monthsOfYear = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthsOfYear[monthIndex];
}

function formatDate(date) {
    const dayName = getDayName(date.getDay());
    const monthName = getMonthName(date.getMonth());
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());

    return `${dayName}, ${dayOfMonth} ${monthName} ${year} ${hours}:${minutes}`;
}

headerElement.innerHTML = formatDate(currentDate);
