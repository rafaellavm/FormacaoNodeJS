function mult(a, b) {
    return a * b * 5;
}

function somarCinco(a) {
    return a + 5;
}

var nome = "Minha calculadora Versão 1";

//module.exports = mult;

module.exports = {
    somarCinco,
    mult,
    nome
}