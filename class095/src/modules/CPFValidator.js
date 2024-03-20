// Exemplo de CPF's: '705.484.450-52' ou  '070.987.720-03'
export default class CPFValidator  {
    constructor(cpf){
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: true,
            configurable: false, 
            
            // Limpar o CPF removendo caracteres não numéricos
            value: cpf.replace(/\D+/g, '')
        });
    }

    isSequential(){
        // Verifica se o CPF é uma sequência de dígitos repetidos
        return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
    }

    generateNewCPF() {
        const cpfWithoutDigits = this.cleanCPF.slice(0, -2);
        const digit1 = CPFValidator.generateDigit(cpfWithoutDigits);
        const digit2 = CPFValidator.generateDigit(cpfWithoutDigits + digit1);
        this.newCPF = cpfWithoutDigits + digit1 + digit2;
    }

    static generateDigit(cpfWithoutDigits){
        let total = 0;
        let regressive = cpfWithoutDigits.length+1;

        for (let numericString of cpfWithoutDigits) {
            total += regressive * Number(numericString);
            regressive--;
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    validate() {
        if(!this.cleanCPF) return false;
        if(typeof this.cleanCPF !== 'string') return false;
        if(this.cleanCPF.length !== 11) return false;
        if(this.isSequential()) return false;
        this.generateNewCPF();

        return this.newCPF === this.cleanCPF;
    }
}
