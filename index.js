/* Para criar uma API, primeiro precisamos criar uma pasta chamada api-filmes. Com o terminal aberto, vamos instalar alguns pacotes para criar nossa API com o comando npm install express body-parser.

Depois, vamos criar um arquivo chamado index.js, e dentro dele vamos declarar o pacote express, instanciá-lo e depois aplicar o plugin body-parser para que nossa API possa trabalhar com JSON: */

const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())


/* Agora, para declarar nossa primeira requisição, temos que escolher seu método. Como queremos enviar informações que estão dentro da nossa API, vamos usar o método HTTP chamado GET. Todo método HTTP possui uma função com o mesmo nome na instância do express. Então, nós podemos usar o método app.get() para declarar uma rota, ou seja, um caminho da nossa API que seja acessível: */

/* Nesse método, precisamos dizer qual a porção da URL (ou rota, endpoint, caminho) que será acessada e uma função que vai gerar a nossa resposta. Através da URL, podemos identificar com o que estamos trabalhando. Com ‘/api’ na URL, entendemos que estamos acessando uma API, então qualquer coisa que vier depois de ‘/api’ serão documentos e recursos de uma API.

Sempre identificamos documentos e coleções de documentos pelo seu nome no plural. Então, se tivermos uma URL como ‘/api/clientes’, sabemos que se trata de uma API que trabalha com uma coleção de clientes. Como vamos fazer uma lista de filmes, nossa URL será ‘/api/filmes’, e no segundo parâmetro vamos fornecer uma função que recebe um objeto de requisição e resposta: */

/* Dentro da função, vamos gerar as informações e usar o objeto resposta para enviar as informações que queremos na requisição. Como precisamos enviar uma lista de filmes, primeiro vamos declarar uma variável chamada filmes, dentro dela vamos colocar objetos representando os filmes favoritos com a propriedade nome: */

app.get('/api/filmes', (requisicao, resposta) => {
    const filmes = [
        { nome: 'Os Vingadores 3' },
        { nome: 'Destacamento Blood' },
        { nome: 'Pantera Negra' }
    ]

    /* Com nossa lista de filmes, agora precisamos enviá-la na resposta. Como estamos trabalhando em uma API, temos que responder em JSON, que é o formato padrão de uma API RESTful.

    Então, vamos usar o método JSON.stringify() para tornar nossa lista em JSON e depois enviar os dados no formato JSON para a resposta da requisição com o método resposta.send(): */

    resposta.send(JSON.stringify(filmes))
})

/* Para que nossa API comece a aceitar requisições, ela precisa escutar por novas requisições em uma determinada porta, ou seja, um local no nosso computador que irá receber requisições. Para isso, vamos usar o método listen() da nossa variável app, passando como parâmetro, o número da porta que vamos ouvir e uma função que será executada quando nossa API já estiver aceitando requisições, com essa função podemos emitir uma mensagem no terminal com console.log() avisando que está tudo funcionando: */

app.listen(3000, () => console.log('API já está funcionando e aceitando requisições!'))