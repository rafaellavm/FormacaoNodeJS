const express = require("express"); //importando o express
const app = express(); //iniciando o express

//criando uma rota
app.get("/", function(requisicao, resposta) {

    resposta.send("<h2>Bem-vindo ao guia do programador!!!!</h2>");
});

app.get("/blog", function(requisicao, resposta) {

    resposta.send("Bem-vindo ao meu blog!");
});

app.get("/canal/youtube", function(requisicao, resposta) {

    var canal = requisicao.query["canal"];

    if (canal) {
        resposta.send("Bem-vindo ao meu canal! Existe um canal chamado <strong>" + canal + "</strong>");
    } else {
        resposta.send("Bem-vindo ao meu canal! Mas ainda não existe um canal!");
    }

});

// colocar parametros
app.get("/ola/:nome/:empresa", function(requisicao, resposta) {

    //requisicao => dados enviados pelo usuario
    // resposta => Resposta que vai ser enviada pelo usuário
    var nome = requisicao.params.nome;
    var empresa = requisicao.params.empresa;

    resposta.send("<h1>Oi, " + nome + ", da empresa: " + empresa + "</h1>");
});

//parâmetros não obrigatórios = usando o '?'
app.get("/cadastro/:artigo?", function(requisicao, resposta) {

    var artigo = requisicao.params.artigo;

    if (artigo) {
        resposta.send("<h1>Oi, essa é a área de cadastro do site! O nome do artigo é: <strong>'" + artigo + "'</strong></h1>");

    } else {
        resposta.send("<h1>Oi, essa é a área de cadastro do site! </h1>");

    }

    //resposta.send("<h1>Oi, essa é a área de cadastro do site! </h1>");
});


app.listen(400, function(erro) {

    if (erro) {
        console.log("Ocorreu um erro");
    } else
        console.log("Servidor iniciado com sucesso!");

});