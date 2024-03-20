// herança com classes
/***
 * A herança funciona de cima para baixo. Ou seja, os filhos herdam dos pais mas os pais não 
 * herdam nada dos filhos.
 * 
 * Dica: não faça uma hierarquia muito extensa para evitar acoplamento e complexidade no código
 * como um teia de aranha pois dificulta a refatoração e o código fica frágio.
 */
class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) {
            console.log(`${this.nome} ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) {
            console.log(`${this.nome} desligado`);
            return;
        }
        this.ligado = false;
    }
}

// filho 1
// Extendendo ou herdando da classe pai
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);    // chama o construtor da classe pai 

        this.cor = cor;
        this.modelo = modelo;
    }
}

// filho 2
class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    // shadowing, sobreescrevendo o método da classe pai. Ou seja, esse método é a sombra do que já existe no pai
    ligar(){
        console.log('Você alterou o método "ligar".');
    }

}

const s1 = new Smartphone('Samsumg', 'black', 'Galaxy S10');
//console.log(s1);


const t1 = new Tablet('iPad', true);
t1.ligar();
t1.ligar();
