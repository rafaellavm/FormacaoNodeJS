const express = require("express"); //importando o express
const app = express(); //iniciando o express

//criando uma rota
app.get("/", function(requisicao, resposta) {

    resposta.send("Bem-vindo ao guia do programador!");
});

app.get("/blog", function(requisicao, resposta) {

    resposta.send("Bem-vindo ao meu blog!");
});

app.get("/canal/youtube", function(requisicao, resposta) {

    resposta.send("Bem-vindo ao meu canal!");
});

app.listen(400, function(erro) {

    if (erro) {
        console.log("Ocorreu um erro");
    } else
        console.log("Servidor iniciado com sucesso!");

});