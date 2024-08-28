// Importing test data
const { ips, cpfs } = require('./base');

// ^ -> Indicates the start of the string
// $ -> Indicates the end of the string

/*
Example with CPFs:
The regular expressions below match the standard CPF format:
XXX.XXX.XXX-XX, where X is a digit from 0 to 9.
*/

console.log(cpfs);

// 1st approach: Using explicit patterns with specific digit and character groupings
console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));

// 2nd approach: Simplifying the pattern using the '\d' character class to represent digits
console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));

// 3rd approach: Further simplifying using grouping and repetition to capture the first three blocks of numbers
console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g)); // Notice the use of groups and repetition {2} for the first two blocks

console.log('\nIP Validation\n');
console.log(ips);

/*
Now for IPs:
The structure of an IP involves four numerical blocks separated by dots, where each block can range between 0 and 255. The regular expression below was built to capture these patterns:

- 250 - 255  ->  25[0-5]
- 200 - 249  ->  2[0-4][0-9]
- 100 - 199  ->  1\d{2}
- 10 - 99    ->  [1-9]\d
- 0 - 9      ->  \d

Each block of an IP is followed by a dot, except the last one.
*/

// Approach 1: Full IP capture using all blocks with a repeated group.
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

console.log(ips.match(ipRegExp));

/*
// Testing IPs from 0.0.0.0 to 300.300.300.300:
// Here we generate incremental IPs and check which ones are valid according to our regular expression.

for (let i = 0; i <= 300; i++) {
    const ip = `${i}.${i}.${i}.${i}`;
    console.log(ip, ip.match(ipRegExp)); // Displays valid IPs
}
*/
