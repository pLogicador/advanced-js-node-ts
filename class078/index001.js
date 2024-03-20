// Polimorfismo
/**
 * Classe = função construtora
 */
//Superclass
function Account(agency, account, balance){
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.withdraw = function(value){
    if (value > this.balance) {
        console.log( `Saldo Insuficiente! ${this.balance.toFixed(2)}`);
        return;
    }
    this.balance -= value;
    this.viewBalance();
};

Account.prototype.deposit = function(value){
    this.balance += value;
    this.viewBalance();
};

Account.prototype.viewBalance = function(){
    console.log(`Ag/c: ${this.agency}/${this.account} | Saldo: R$${this.balance.toFixed(2)}`);
};


// Sobreescrevendo uma conta corrente e uma conta poupança
function CurrentAccount(agency, account, balance, limit){
    Account.call(this, agency, account, balance);
    this.limit = limit;
}

// linkcando com a superclasse e retornando o construtor
CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

CurrentAccount.prototype.withdraw = function(value){
    if (value > (this.balance + this.limit)) {
        console.log( `Saldo Insuficiente! ${this.balance.toFixed(2)}`);
        return;
    }
    this.balance -= value;
    this.viewBalance();
};

// Polimorfismo
function SavingsAccount(agency, account, balance){
    Account.call(this, agency, account, balance);
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;


const contacorrente = new CurrentAccount(1, 555, 0, 200);
contacorrente.deposit(10);
contacorrente.withdraw(50);
contacorrente.withdraw(250);

console.log('\n\n');

const contapoupanca = new SavingsAccount(133, 5, 0);
contapoupanca.deposit(10);
contapoupanca.withdraw(50);
contapoupanca.withdraw(250);
