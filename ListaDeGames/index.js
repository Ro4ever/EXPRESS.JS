//O que é Node.js e por que é popular no desenvolvimento web?
// É popular por sua eficiência, desempenho rápido, arquitetura orientada a eventos e comunidade ativa de desenvolvedores.

//Qual é a diferença entre o Node.js e outras tecnologias de servidor, como o
//Apache?
//Está na forma como eles lidam com as solicitações de entrada e saída, no Apache usa modelo de processo por solicitação,
//o Node utiliza arquitetura orientada a eventos, faz com que com ele faça várias conexões simultâneas

//Como você inicia um projeto Node.js usando o npm?
//No terminal, navegue até o diretório do projeto desejado.
//Execute npm init e siga as instruções para criar um arquivo package.json.
//Instale as dependências do projeto com npm install nome-da-dependencia.

//O que é o Express.js e qual é o seu papel no desenvolvimento web com
//Node.js?
//Ele é um framework web que simplifica a criação de aplicativos e APIs

//Explique o conceito de middleware no contexto do Express.js.
//Eles são usados para executar tarefas como manipulação de solicitação/resposta

//Como você roteia solicitações HTTP em um aplicativo Express?
//Importar o módulo 'express'
//Definir as rotas com métodos HTTP como get, post
//Cada rota é um caminho, depois só chamá-las

//Oqueéomiddleware de análise de corpo (body-parser) e por que é útil em
//um aplicativo Express?
//Simplifica o processo de extração e manipulação de dados do corpo das solicitações HTTP

//Quais são os principais métodos HTTP e como eles são usados em rotas
//Express?
//GET: Solicita dados de um recurso específico.
//POST: Envia dados para serem processados por um recurso específico.
//PUT: Atualiza os dados de um recurso específico.
//DELETE: Remove um recurso específico.

//Carregando o express
const express = require("express");

//Instancio o express e carregando a biblioteca do express dentro dessa const app
const app = express();

app.listen(3080,() => {
    console.log("Servidor rodando!")
})

app.use(express.json());

//Lista de Games

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activison", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "Super Mario World", studio: "Nintendo", price: 150},
    {title: "Need for Speed Most Wanted", studio: "EA Games", price: 100},
    {title: "Donkey Kong Country 3", studio: "Rare", price: 200},
    {title: "Resident Evil 2", studio: "Capcom", price: 200}
]

app.get("/", (req, res) => {
    res.json(games);
})

app.post("/novogame", (req, res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = { title, studio, price };
    games.push(newGame);

    res.send("OK");
});
/* Como podem observar, agora temos um tipo de envio de informações do tipo
 PUT eumarota nova “/novogame/:index” dessa forma eu consigo capturar qual
 jogo cadastrado eu pretendo realizar a edição, o nome index nesse quesito
 significa que pretendo passar um parâmetro no formato de índice de um array
 ok?
 É preciso informar que irei trabalhar com índice e que irei passar por parâmetros
 os requisitos necessários para recuperar e enviar informações novas ok? Na
 sequência eu recupero as informações em variáveis como fizemos no processo
 de inserir dados , e depois chamo meu array games agora setando um novo
 índice para ele e por fim retorno o meu novo array com um produto modificado
 no formato json.*/
//att um curso
app.put('/novogame/:index', (req, res) =>{
    const{ index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

        games[index] = { title, studio, price };
    
    return res.json(games);
})

/* Agora iremos criar nossa rota para deletarmos um game já existente em nosso
 array que está simulando um banco de dados.
 Para isso precisaremos trabalhar com índices, que seriam a mesma situação em
 umbanco de dados só que trabalhando com “id” o nosso índice funcionará da
 mesma forma que o “id”.
 Assim como tivemos de passar por parâmetro o índice correspondente do meu
 game no array faremos da mesma forma para deletarmos um game. */ 
 app.delete("/:index", (req, res) =>{
    const { index } = req.params;
    games.splice(index,1);
    return res.json({ message: "O Jogo foi deletado "});
 })

