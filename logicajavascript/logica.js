//Trocar os valores de variáveis

var a = 999
var b = 555

console.log("a", a)
console.log("b", b)

var temporaria = a

a = b
b = a  

console.log("a", a)
console.log("b", b)

// Utilização de parametros e retorno

function troca(a, b) {
    var temp = a
    var a = b
    var b = temp
    return {a, b}
}
console.log('resultado = ', troca(555, 999));