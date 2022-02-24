//var multFuncao = require("./calculadora");
var calculadora = require("./calculadora");

function soma(a, b) {
    return a + b;
}

function escrever() {
    return "Resultado da soma";
}


console.log(calculadora.nome);
console.log("Multiplicação = ", calculadora.mult(10, 20));
console.log("Multiplicação = ", calculadora.somarCinco(20));