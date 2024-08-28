// Importing example text and file list
const { exampleText, files } = require('./base');

// Example 1: Searching for "João" with quantifiers in the example string
const regExp1 = /Jo+ã+o/gi; // Search for one or more "o" and one or more "ã"
console.log("Find 'João' with quantifiers:", exampleText.match(regExp1));

// Example 2: Working with files and their extensions

// Regular expression to find files with ".jpg" or ".jpeg" extension
const regExp2 = /\.(jpg|jpeg)/gi;

// Simplifying with quantifiers, searching for ".jpg", ".jpeg", ".JPG", ".JPEG"
const regExp3 = /\.jpe?g/gi; // The "e?" indicates that 'e' can appear 0 or 1 time

// Be cautious with overuse of the "*" quantifier, which might catch incorrect extensions
const regExp4 = /\.jpe*g/gi; // The "*" allows multiple "e", which can cause unexpected results

// Using a more specific quantifier to ensure correct matches
const regExp5 = /\.jpe{0,1}g/gi; // The "e{0,1}" ensures "e" appears 0 or 1 time

// Regular expression that handles different combinations of uppercase and lowercase letters
const regExp6 = /\.((jp|JP)(e|E)?(g|G))/g; // Quantifiers inside groups affect only what's in the group

// Loop to test each regular expression and check which files match
console.log('#######################');
for (const file of files) {
    const valid = file.match(regExp2);
    if (!valid) continue;
    console.log(`${file} \t\t ${valid}`);
}

console.log('#######################');
for (const file of files) {
    const valid = file.match(regExp3);
    if (!valid) continue;
    console.log(`${file} \t\t ${valid}`);
}

console.log('#######################');
for (const file of files) {
    const valid = file.match(regExp4);
    if (!valid) continue;
    console.log(`${file} \t\t ${valid}`);
}

console.log('#######################');
for (const file of files) {
    const valid = file.match(regExp5);
    console.log(`${file} \t\t ${valid}`);
}

console.log('#######################');
for (const file of files) {
    const valid = file.match(regExp6);
    console.log(`${file} \t\t ${valid}`);
}
