alert('Obrigatório o Preenchimento da Lista')
var clientes = [];
var cliente = {}

function cadastrarCliente(cliente) {
clientes.push(cliente);
}

function preencherCliente() {
cliente.nome = prompt("Digite seu Nome");
cliente.nacimento = prompt("Digite sua Data de Nacimento");
cliente.cpf = prompt("Digite seu CPF");
cliente.rg = prompt("Digite seu RG");
cliente.endereco = prompt("Digite seu Endereço");
}

preencherCliente();
cadastrarCliente(cliente);
console.log(clientes);

let result = confirm('Tem certeza que quer confirmar isso?');
console.log(result);
confirm('Confirmação Registroda');

clientes.push(cliente);
for(var contador = 0; contador < clientes.length; contador++) {
    console.log("\n Nome : ", cliente.nome, "\n Data de Nacimento : ", cliente.nacimento, "\n CPF : ", cliente.cpf, "\n RG : ", cliente.rg, "\n Endereço : ", cliente.endereco);
}