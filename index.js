const express = require('express');
const bodyParser = require('body-parser');
//protocolo de comunicacão entre apis e outros serviços cors
//CORS: autoriza para qualquer tipo de serviço (front-end, outras apis,etc)
const cors = require('cors')
const app = express();
const port = 8081;
//importações
const editora = require('./controllers/editoraController.js');
const categoria = require('./controllers/categoriaController.js');
const autor = require('./controllers/autorController.js');
const livro = require('./controllers/livroController.js');
//Rotas
app.use(bodyParser.json());
//Função CORS para a autorização do uso da API
app.use(cors())
app.get('/', (req, res)=> res.send('Estou aqui'))
app.use('/editora', editora);
app.use('/categoria', categoria);
app.use('/autor', autor);
app.use('/livro', livro);
app.listen(port, () => console.log(`Servidor rodando porta ${port}!`))