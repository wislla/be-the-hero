//importando o express para dentro da app
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

//instaciando o express e criando a aplicacao

const app = express();
app.use(cors);
app.use(express.json());
app.use(routes);
//criando a rota do diretorio raiz


//fazendo o node ouvir na porta 3333
app.listen(3334);
