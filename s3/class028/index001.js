// Date Object -> (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

// Example 1 - Creating a Date Using Milliseconds
// This method is useful for creating dates relative to the Unix epoch (January 1, 1970, 00:00:00 UTC).
const threeHoursInMs = 60 * 60 * 3 * 1000;    // 3 hours in milliseconds (Brasília time zone)
const oneDayInMs  = 60 * 60 * 24 * 1000;      // 24 hours in milliseconds

const date1 = new Date(0 + threeHoursInMs - oneDayInMs);  // Adjusts to 01/01/1970 based on time zone
console.log(date1.toString());  // Outputs a formatted date string

// Example 2 - Creating a Date by Specifying Date Components
// Month is zero-indexed (0 = January, 11 = December) 0 a 11;   sec: 0-59;   Milliseconds: 0-999
const date2 = new Date(2001, 11, 9, 15, 14, 59, 999); // year, month, day, hour, minute, second, millisecond

// Example 3 - Creating a Date from a String
const date3 = new Date('2002-12-09 23:30:59.100'); // ISO 8601 format

// Extracting Date Components
console.log('Day:', date3.getDate());           // Day of the month (1-31)
console.log('Month:', date3.getMonth() + 1);    // Month (0-11, so add 1 for 1-12)
console.log('Year:', date3.getFullYear());      // Full year (e.g., 2002)
console.log('Hour:', date3.getHours());         // Hour (0-23)
console.log('Minute:', date3.getMinutes());     // Minute (0-59)
console.log('Second:', date3.getSeconds());     // Second (0-59)
console.log('Millisecond:', date3.getMilliseconds()); // Millisecond (0-999)
console.log('Day of the Week:', date3.getDay());  // Day of the week (0-Sunday to 6-Saturday)

console.log(date3.toString());  // Full date string representation

console.log(Date.now());  // Current timestamp in milliseconds
