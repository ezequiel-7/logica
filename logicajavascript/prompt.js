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