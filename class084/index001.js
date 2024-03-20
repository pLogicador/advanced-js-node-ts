// Usando classes para validar CPF

// Exemplo de CPF's: '705.484.450-52' ou  '070.987.720-03'
class ValidaCPF {
    constructor(cpfEnviado){
        // Define uma propriedade 'cpfLimpo' na instância, garantindo que não possa ser alterada ou excluída
        // Limpa o CPF removendo caracteres não numéricos
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false, 
            
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    // Verifica se o CPF é uma sequência de dígitos repetidos
    ehSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    // Gera um novo CPF com dígitos válidos
    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    // Gera um único dígito para o CPF
    static geraDigito(cpfSemDigitos){
        let total = 0;
        let regressivo = cpfSemDigitos.length+1;

        for (let strNumerica of cpfSemDigitos) {
            total += regressivo * Number(strNumerica);
            regressivo--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    // Valida o CPF
    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.ehSequencia()) return false;
        this.geraNovoCpf();

        // Compara o novo CPF com o original
        return this.novoCPF === this.cpfLimpo;
    }
}

// Exemplo de CPF para validar
const cpfExemplo = '705.484.450-52';

// Instancia o ValidadorCPF com o CPF exemplo
let validacpf = new ValidaCPF(cpfExemplo);
console.log(validacpf.valida());

// Valida o CPF e exibe o resultado 
console.log(validacpf.valida() ? 'CPF válido' : 'CPF inválido');
