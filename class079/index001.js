// Factory Functions + Prototypes - AINDA ACOPLADO
function criaPessoa(nome, sobrenome){

    // Criando um objeto prototype compartilhado para métodos
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando`);
        },

        comer(){
            console.log(`${this.nome} está comendo`);
        },

        beber(){
            console.log(`${this.nome} está bebendo`);
        }
    };

    // Utilizando Object.create para criar um novo objeto com o prototype definido
    // Podemos configurar o enumerable, getters, settera e dentre outras aqui
    return Object.create(pessoaPrototype, {
        nome:{value: nome},
        sobrenome:{value: sobrenome}
    });
}

const p1 = criaPessoa('Pedro', 'Miranda');
p1.falar();
p1.comer();
p1.beber();

