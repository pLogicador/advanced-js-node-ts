// Factory Function: Creating a person object with methods and properties
function createPerson(firstName, lastName, height, weight) {
    return {
        firstName,
        lastName,

        // Getter for full name
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },

        // Setter for full name
        set fullName(value) {
            const parts = value.split(' ');
            this.firstName = parts.shift(); // Remove and return the first element
            this.lastName = parts.join(' '); // Join the remaining elements as last name
        },

        // Method for speaking
        speak(topic = '...') {
            return `${this.firstName} is talking about ${topic}`;
        },

        // Properties for height and weight
        height,
        weight,

        // Getter for BMI (Body Mass Index)
        get bmi() {
            const index = this.weight / (this.height ** 2);
            return index.toFixed(2); // Return BMI rounded to 2 decimal places
        }
    };
}

// Creating a person using the factory function
const person1 = createPerson('Pedro', 'Miranda', 1.80, 75);

// Changing the full name using the setter
person1.fullName = 'Gertrudes Miranda Silva';

// Logging the results
console.log(person1.firstName); // Output: Gertrudes
console.log(person1.lastName);  // Output: Miranda Silva
console.log(person1.fullName);  // Output: Gertrudes Miranda Silva
console.log(person1.speak('JavaScript')); // Output: Gertrudes is talking about JavaScript

// Trying to modify the height directly (this works because height is a direct property)
person1.height = 1.75;
console.log(person1.bmi);  // Output: Updated BMI after height change
