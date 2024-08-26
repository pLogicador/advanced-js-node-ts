// Factory Function for Creating a Person
function createPerson(firstName, lastName, height, weight) {
    return {
        firstName,
        lastName,

        // Method for speaking
        speak(subject) {
            return `${this.firstName} is talking about ${subject}`;
        },

        // Properties for height and weight
        height,
        weight,

        // Method to calculate BMI (Body Mass Index)
        calculateBMI() {
            const bmi = this.weight / (this.height ** 2);
            return bmi.toFixed(2);  // Returns the BMI rounded to 2 decimal places
        }
    };
}

// Creating person objects using the factory function
const person1 = createPerson('Pedro', 'Miranda');
const person2 = createPerson('Maria', 'Miranda', 1.50, 70);

// Example usage of the methods
console.log(person1.speak('JavaScript'));
console.log(person2.speak('NodeJS'));
console.log(`Maria's BMI: ${person2.calculateBMI()}`);
