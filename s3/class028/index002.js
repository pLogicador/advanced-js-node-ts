/**
 * Adds a leading zero to numbers less than 10.
 * @param {number} value - The number to be formatted.
 * @returns {string} - The number formatted with leading zero if necessary.
 */
function padZero(value) {
    return value < 10 ? `0${value}` : value.toString();
}

/**
 * Formats a date in a specific format: DD/MM/YYYYTHH:MM:SS.
 * @param {Date} date - The date object to be formatted.
 * @returns {string} - The date formatted as a string.
 */
function formatDate(date) {
    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1); // Months are indexed from 0
    const year = date.getFullYear(); // Year does not need padding
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());
    
    return `${day}/${month}/${year}T${hours}:${minutes}:${seconds}`;
}

const currentDate = new Date();
const formattedDate = formatDate(currentDate);

console.log(formattedDate);
