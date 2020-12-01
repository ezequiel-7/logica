var cliente = {
    nome: 'Ezequiel',
    login: 'ezequielphp',
    senha: '123',
    conta: 'AX23',
}

var consultar_cliente = function() {
    console.log('Nome: ' + cliente.nome);
    console.log('Login: ' + cliente.login);
    console.log('Senha: ' + cliente.senha);
    console.log('Conta: ' + cliente.conta);
}

var saldo = 1000;
var checkEspecial = 500;
var temCheckEspecial = true

function sacar(valorSaque) {
    if (valorSaque < saldo) {
        saldo -= valorSaque;

        console.log('Você sacou: ', valorSaque);
        console.log('Seu saldo atual é: ', saldo);
    } else {
        if (temCheckEspecial) {
            console.log('Você acessou o seu check-especial!');

            if (valorSaque < (saldo + checkEspecial)) {
                checkEspecial -= (valorSaque - saldo);

                saldo = 0;
                console.log('Você sacou: ', valorSaque);
                console.log('Seu saldo atual é: ', saldo);
                console.log('Seu check-especial restante é: ', checkEspecial);
            }
        } else {
            console.log('O valor solicitado é maior que seu limite');
        }
    }
}

console.log(saldo);
sacar(1100)

// Deposito
function depositar(valorDeposito) {
    saldo += valorDeposito;
    console.log('Você depositou: ', valorDeposito);
    console.log('Seu novo saldo é: ', saldo);
}

consultar_cliente();
 depositar(700);