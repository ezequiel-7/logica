// Área quadrada

function areaQuadrada() {
    var lados = 7;
    var tamanhoslados = 7;

    area = lados * tamanhoslados;
    console.log("A área quadrada é: ", area)
    }
    areaQuadrada();

    // Utilização de parametros e retorno

    function AreaQuadrada2(lado, tamanhoslados) {
        return lado * tamanhoslados;
    }
    console.log('área = ', AreaQuadrada2(7, 7));