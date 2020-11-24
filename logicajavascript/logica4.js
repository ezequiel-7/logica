// Média

function media() {
    var media1 = 10;
    var media2 = 8;
    var media3 = 7;
    var media;

    media = (media1 + media2 + media3)/3
    console.log("Sua média foi: ", media);

    }
    media();

    // Utilização de parametros e retorno

    function media2(media1, media2, media3) {
        return (media1 + media2 + media3) / 3;
    }
    console.log('Média = ', media2(10, 8, 7, 3));