// Example scope between let and var
const isTrue = true;
var globalName = 'Miranda';

function greet() {
    var localName = 'Pedro';

    console.log(localName, globalName);

    if (isTrue) {
        let blockScopedName = 'Emanuel';
        var globalName = 'Silva'; // Redefinindo a variável globalName dentro do bloco if
        console.log(localName, globalName);
    }

    // 'blockScopedName' não é acessível fora do bloco if
}

// 'localName' não é acessível fora da função greet
greet();

console.log('Outside function:', globalName); // 'globalName' foi redefinido dentro do bloco if
