// Solução
function validadeCPF(inputCpf) {
    // Remover caracteres não numéricos
    let cleanCPF = cpf.replace(/\D+/g,'');

    // Transformar a string em um array de números
    let cpfNumbers = Array.from(cleanCPF, Number);

    // Validar se todos os dígitos são iguais, o que torna o CPF inválido
    let firstDigit = cpfNumbers[0];
    let allTheSame = true;

    for(let i=1; i < cpfNumbers.length; i++){
        if(cpfNumbers[i] !== firstDigit) {
            allTheSame = false;
            break;
        }
    }
    
    if(allTheSame) return false;

    // Calcular o primeiro dígito verificador
    let firstDigitCalculate = 11 - (cpfNumbers.slice(0, 10).reduce((ac, val, i) => ac + val * (10-i), 0)%11);
    firstDigitCalculate = firstDigitCalculate > 9 ? 0 : firstDigitCalculate;
    
    // Calcular o segundo dígito verificador
    let secondDigitCalculate = 11 - (cpfNumbers.slice(0, 10).reduce((ac, val, i) => ac + val * (10-i), 0)%11);
    secondDigitCalculate = secondDigitCalculate > 9 ? 0 : secondDigitCalculate;

    // Verificar se os dígitos calculados são iguais aos dígitos originais
    return firstDigitCalculate === cpfNumbers[9] && secondDigitCalculate == cpfNumbers[10];
}

let cpf = '705.484.450-52';
let result = validadeCPF(cpf);

console.log(result);
