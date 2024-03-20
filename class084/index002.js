// Classe para validar CPF. Versão simples
class ValidadorCPF {
    constructor(cpf) {
        // Limpa o CPF removendo caracteres não numéricos
        this.cpfLimpo = cpf.replace(/\D+/g, '');
    }

    // Verificar se o CPF é uma sequência de dígitos repetidos
    _verificarSequencia() {
        // Cria uma sequência de dígitos repetidos a partir do primeiro dígito do CPF
        const sequencia = this.cpfLimpo.charAt(0).repeat(11);
        // Compara a sequência criada com o CPF
        return this.cpfLimpo === sequencia;
    }

    // Calcula o dígito verificador do CPF
    static _calcularDigito(cpfParcial) {
        let total = 0;
        let regressivo = cpfParcial.length + 1;

        // Calcula o total ponderado dos dígitos do CPF
        for (let i = 0; i < cpfParcial.length; i++) {
            total += regressivo * Number(cpfParcial[i]);
            regressivo--;
        }

        // Calcula o dígito verificador
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    // Valida o CPF
    validar() {
        // Verifica se o CPF possui exatamente 11 dígitos
        if (this.cpfLimpo.length !== 11) {
            return false;
        }

        // Verifica se o CPF é uma sequência de dígitos repetidos
        if (this._verificarSequencia()) {
            return false;
        }

        // Calcula os dígitos verificadores
        const digito1 = ValidadorCPF._calcularDigito(this.cpfLimpo.slice(0, 9));
        const digito2 = ValidadorCPF._calcularDigito(this.cpfLimpo.slice(0, 9) + digito1);

        // Monta o CPF completo com os dígitos verificadores calculados
        const cpfValidado = this.cpfLimpo.slice(0, 9) + digito1 + digito2;

        // Compara o CPF válido com o CPF fornecido
        return cpfValidado === this.cpfLimpo;
    }
}

// Exemplo de uso
const cpfExemplo = '705.484.450-52';
const validador = new ValidadorCPF(cpfExemplo);
if (validador.validar()) {
    console.log(`${cpfExemplo} é um CPF válido.`);
} else {
    console.log(`${cpfExemplo} não é um CPF válido.`);
}
