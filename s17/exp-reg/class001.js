const { exampleText } = require('./base');

const regExp1 = /(maria|joão)(, hoje sua esposa)/i; // Regular expression with 'i' flag
const found = regExp1.exec(exampleText); // Executes the regular expression on the example text

if (found) {
    console.log(`Full match: ${found[0]}`); // Displays the full match
    console.log(`First group: ${found[1]}`); // Displays the first captured group (Maria or João)
    console.log(`Second group: ${found[2]}`); // Displays the second captured group (", today your wife")
}
