/*
    Evite Palavras Reservadas:
    -   Evite o uso de palavras reservadas do JS para nomear suas variáveis, pois isso pode causar conflitos e erros. 
        Use nomes que descrevam claramente o propósito da variável.

    Escolha Nomes Significativos:
    -   Atribua nomes significativos e descritivos às suas variáveis para facilitar a compreensão do código. 
        Isso contribui para a legibilidade e manutenção do seu software.

    Inicie com Letras e Não com Números:
    -   Certifique-se de que o nome da variável comece com uma letra e não com um número. O primeiro caractere deve ser 
        uma letra ou o símbolo de sublinhado (_) para garantir conformidade com as convenções de nomenclatura.

    Evite Espaços ou Traços:
    -   Não utilize espaços ou traços em nomes de variáveis. Em vez disso, use a convenção CamelCase para criar 
        nomes compostos por palavras, onde cada palavra, exceto a primeira, é iniciada com uma letra maiúscula.

    Adote o CamelCase:
    -   Utilize a prática de CamelCase para formar nomes de variáveis. Nomes compostos por várias palavras são 
        escritos sem espaços e cada palavra subsequente inicia com uma letra maiúscula.

    Considerações Case-Sensitive:
    -   Lembre-se de que JS é uma linguagem case-sensitive. Isso significa que minhaVariavel e MinhaVariavel são 
        tratadas como variáveis distintas. Preste atenção à consistência no uso de maiúsculas e minúsculas ao se referir a variáveis.

    Evite Redefinir Variáveis com let:
    -   Não redeclare variáveis utilizando let no mesmo escopo. Uma vez que uma variável é declarada com let, 
        qualquer tentativa subsequente de declará-la no mesmo escopo resultará em um erro. Utilize let apenas 
        para a declaração inicial da variável no escopo desejado.

    UTILIZE 'let' AOA INVÉS DE 'var' SEMPRE !!
*/


let inputName = 'Pedro Miranda';    // declarando e inicializando uma variável
let yearOfBirth = 2002;

console.log(`${inputName} nasceu em ${yearOfBirth}.`);
console.log(`in 2022 ${inputName} met Larissa.`);
console.log(`${inputName} married Larissa in 2025.`);
console.log(`${inputName}'s son is called Carlos.`);