// Validando um cpf (algoritmo)
/* 
 * Vamos utilizar o exemplo de CPF '705.484.450-52'   '070.987.720-03' para ilustrar o processo
 * 
 * Passos:
 * 1. Remover caracteres não numéricos, resultando em "70548445052".
 * 2. Calcular o primeiro dígito verificador:
 *    - Multiplicar cada dígito pelos pesos correspondentes (10 a 2).
 *    - Somar os resultados e calcular o resto da divisão por 11.
 *    - Subtrair o resto de 11 e considerar 0 se o resultado for maior que 9.
 *    - Para o exemplo, obtemos 5 como primeiro dígito.
 * 3. Calcular o segundo dígito verificador:
 *    - Multiplicar cada dígito (incluindo o primeiro dígito calculado) pelos pesos (11 a 2).
 *    - Somar os resultados e calcular o resto da divisão por 11.
 *    - Subtrair o resto de 11 e considerar 0 se o resultado for maior que 9.
 *    - Para o exemplo, obtemos 2 como segundo dígito.
 * 4. Combinar os dígitos verificadores calculados com os dígitos originais.
 * 5. Verificar se o CPF resultante é igual ao CPF original.
 * 
 * Exemplo:
 *  - CPF Original: "705.484.450-52"
 *  - CPF Limpo: "70548445052"
 *  - Primeiro Dígito Calculado: 5
 *  - Segundo Dígito Calculado: 2
 *  - CPF Validado: "70548445052" === "70548445052" (true)
 * 
 * O algoritmo é aplicado para garantir a integridade do CPF, verificando se os dígitos
 * verificadores calculados correspondem aos dígitos fornecidos no CPF original.
 */

function ValidaCPF(cpfEnviado){

    Object.defineProperty(this, 'cpfLimpo', {
        enumerable:true,

        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        },
        
    })
}

ValidaCPF.prototype.valida = function (){
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val)=>{
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('070.987.720-03');

if (cpf.valida()){
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}