// Operadores aritméticos, de atribuição e de incremento
/* 
    Adição              (+): Realiza a soma dos operandos ou concatena strings.
    Subtração           (-): Calcula a diferença entre os operandos.
    Multiplicação       (*): Efetua o produto dos operandos.
    Divisão             (/): Divide o numerador pelo denominador, resultando em um quociente
    Potenciação         (**): Eleva o valor da base à potência do expoente.
    Resto da Divisão    (%): Retorna o resto da divisão do numerador pelo denominador.


    Ordem de     |   Operadores
    Precedência	 |   
    ------------------------------------------------------------------
    1	         |   ()          (Parênteses)
    2	         |   **          (potenciação)
    3	         |   * / %       (da esquerda para a direita)
    4	         |   + -         (da esquerda para a direita)
    5	         |   ++ --       (pré e pós incremento/decremento)


    Pré-incremento/decremento  (++variavel):
        Incrementa o valor da variável antes de seu uso na expressão (A ação ocorre imediatamente na linha onde está declarada).
        É útil quando a modificação da variável precisa ocorrer antes de outras operações na mesma linha.
        Ex: Você adiciona 1 à caixa e usa o valor modificado.

    Pós-incremento/decremento  (variavel++):
        Utiliza o valor atual da variável na expressão e só depois a incrementa. (A ação ocorre na linha seguinte, após o uso da variável).
        É adequado quando a utilização do valor original da variável é mais relevante e a modificação pode ocorrer em uma etapa posterior.
        Ex: Você usa o valor atual da caixa e só depois adiciona 1.


    Operadores de atribuição:
    +=, -=, *=, **=, /=, %=, etc.
*/


const firstNumber = 10;
const secondNumber = 50;

// Operadores aritméticos
console.log(firstNumber + secondNumber);

// Pós e pré-Incremento
let contador = 1;
console.log(contador++);  // Saída: 1 (pós-incremento)
console.log(contador);    // Saída: 2

console.log(++contador);  // Saída: 3 (pré-incremento)

// Sobre uso de const e incremento
const constante = 5;
// constante++;  // Erro! Não podemos modificar uma constante.

// Incremento de "n em n"
contador = 0;

const passos = 2;
contador += passos; // ou:  contador = contador + passos
console.log(contador);  // Saída: 5 (incremento de 2 em 2)

// OBS: A mesma lógica pode ser aplicada com outros operadores de atribuição combinada, como -=, *=, **=, /=, %=, etc.


/* OBS Cuidado com Conversões Automáticas
    Ex: Quando ocorre uma operação de multiplicação entre um número e uma string, o JS tenta converter automaticamente a string em um número.
        Se a conversão for bem-sucedida, a operação é realizada; caso contrário, o resultado é NaN.
*/

// Exemplo: Conversão automática resultando em NaN
const num1 = 5;
const num2 = 'Pedro';
console.log(num1 * num2);   // Saída: NaN

// Exemplo: Conversão automática bem-sucedida
const num3 = 5;
const num4 = '5';
console.log(num3 * num4);   // Saída: 25 (num4 é convertido para número antes da multiplicação)

// Converta explicitamente para evitar surpresas
const num5 = 5;
const num6 = Number('5');   // Utilizando Number para converter a string para número
console.log(typeof num6);   // Saída: number

/*
    Alternativas para conversão explícita:

    parseInt()   converte uma expressão para um número inteiro.
    parseFloat() converte uma expressão para um número de ponto flutuante.
    Number()     Converte para um número inteiro ou decimal.
*/