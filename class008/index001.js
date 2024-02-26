const inputName = 'Pedro Miranda';
const inputAge = 21;
const currentYear = 2024;
const inputWeight = 74;
const inputHeight = 1.64;
let bodyMassIndex = inputWeight / (inputHeight * inputHeight);  // peso / (altura * altura)
let yearOfBirth = currentYear - inputAge;

console.log(`${inputName} nasceu em ${yearOfBirth}, tem ${inputAge} anos, pesa ${inputWeight} kg`);
console.log(`tem ${inputHeight} de altura e seu IMC é de ${bodyMassIndex}`);