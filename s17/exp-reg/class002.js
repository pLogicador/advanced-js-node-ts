// Importing example text
const { exampleText } = require('./base');

// Regular expression that finds all occurrences of "João" or "Maria", case-insensitive and global
const regExp1 = /João|Maria/gi;

// Displaying the original text
console.log("Original Text:", exampleText);

// `match` Method: Returns an array with all occurrences of "João" or "Maria"
console.log("Found Matches:", exampleText.match(regExp1));

// `replace` Method: Replaces all occurrences of "João" or "Maria" with "Felipe"
console.log("Replace João/Maria with Felipe:", exampleText.replace(regExp1, 'Felipe'));

// `replace` Method: Wrapping occurrences of "João" or "Maria" with <b> tags using groups
console.log("Wrap João/Maria with <b>:", exampleText.replace(/(João|Maria)/gi, '<b>$1</b>'));

// `replace` Method: Replace by a function, converting "João" or "Maria" to uppercase
console.log("Convert João/Maria to uppercase:", exampleText.replace(/(João|Maria)/gi, function(input) {
    return input.toUpperCase();
}));
