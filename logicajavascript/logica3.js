// Sucessor e antecessor

function SucessorAntecessor() {
    var numero = 10;
    var sucessor = 11;
    var antecessor = 9;

    numero = 10
    console.log("O número é: ", numero,"O sucessor é: ", sucessor, "O antecessor é: ", antecessor);

    }
    SucessorAntecessor();

    // Utilização de parametros e retorno

    function SucessorAntecessor2(numero) {
        return numero;
    }
    console.log('Número = ', SucessorAntecessor2(10));

    function SucessorAntecessor2(sucessor) {
        return sucessor;
    }
    console.log('Sucessor = ', SucessorAntecessor2(11));

    function SucessorAntecessor2(antecessor) {
        return antecessor;
    }
    console.log('Antecessor = ', SucessorAntecessor2(9));