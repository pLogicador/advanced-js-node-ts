// Function to return the day of the week as a string based on the day number
function getDayOfWeekText(day) {
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
            return 'Invalid day';
    }
}

const date = new Date('2002-12-09 00:00:00');
const dayOfWeek = date.getDay();
const dayOfWeekText = getDayOfWeekText(dayOfWeek);

console.log(dayOfWeek, dayOfWeekText);
