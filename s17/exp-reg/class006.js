// ^ (Starts with) and $ (Ends with)

// Import CPF data
const { cpfs, cpfs2 } = require('./base');

// Explanation of Symbols:
// ^ -> Indicates the string must start with the specified pattern.
// $ -> Indicates the string must end with the specified pattern.
// [^] -> When used inside square brackets, '^' negates the pattern, meaning it inverts the character set.
// m -> Multiline flag, makes ^ and $ work on each line individually instead of the entire string.

// Regular expression to validate a CPF (format: 123.456.789-01)
const cpf = '215.978.456-12';
const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/g; // Validates a single CPF, ensuring the correct start and end.
const cpfRegExpCheckingByLine = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm; // Validates CPF in multiple lines.

console.log(cpf.match(cpfRegExp)); // Validates an individual CPF
console.log(cpfs2.match(cpfRegExpCheckingByLine)); // Validates multiple CPFs in cpfs2

