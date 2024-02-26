// Escopo Léxico
/*
    O escopo léxico refere-se à capacidade de uma função em JS de acessar variáveis do 
    local onde ela foi declarada, bem como de seus "vizinhos" na hierarquia de escopo.
    Isso significa que, se uma variável não estiver declarada dentro da função, 
    ela buscará no escopo que a contém, subindo até o escopo global, se necessário.
*/
const nome = 'Pedro';

function falaNome(){
    console.log(nome);
}


function usaFalaNome(){
    const nome = 'Miranda';  // Esta declaração está dentro do escopo de 'usaFalaNome'
    falaNome();
}

usaFalaNome();

/*
    Quando 'falaNome' é chamada dentro de 'usaFalaNome', ela acessa a variável 'nome' 
    no seu escopo léxico, que inclui a variável 'nome' declarada dentro de 'usaFalaNome'.
    Portanto, a saída será 'Miranda', não a variável global 'Pedro'.
*/