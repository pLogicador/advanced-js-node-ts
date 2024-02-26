// retorno da função

/*
    return
        - Retorna um valor.
        - Encerra a execução da função.

    OBS:
        Existem funções que retornam um valor e outras não. Tudo vai depender do contexto.

    Exemplo:
        document.addEventListener('click', function(){
            document.body.style.background = "black";
        });
        // Esta função não retorna nada, porém, executa uma ação.
    
    Exemplo 2:
*/

// Função que retorna um objeto
function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa("Pedro", "Miranda");
const p2 = {
    nome: 'Pedro', 
    sobrenome: 'Miranda'
}

console.log(typeof p1); // Saída: object
console.log(typeof p2); // Saída: object