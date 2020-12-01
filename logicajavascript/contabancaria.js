// Conta Bancária

var cliente = {
    nome: 'Ezequiel',
    login: 'ezequielphp',
    senha: '123',
    conta: 'AX23',
    saldo: 500
}

var depositar = function(valor) {
    cliente.saldo += valor;
    console.log('Você depositou: ', cliente.saldo);
}

var sacar = function(valor) {
    cliente.saldo -= valor;
    console.log('Você sacou: ', cliente.saldo);
}

var consultar_saldo = function() {
    console.log('Saldo atual é: ' + cliente.saldo);
}

var consultar_cliente = function() {
    console.log('Nome: ' + cliente.nome);
    console.log('Login: ' + cliente.login);
    console.log('Senha: ' + cliente.senha);
    console.log('Conta: ' + cliente.conta);
    console.log('Saldo: ' + cliente.saldo);
}

consultar_cliente();
depositar(100);
consultar_saldo();
sacar(50);
consultar_saldo();