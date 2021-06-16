const http = require('http'); // pega serviço de http
const app = require('./app'); // importa o app
const port = process.env.PORT || 3000; // define porta padrão 
const server = http.createServer(app); // cria o server
server.listen(port); //rodar em localhost:3000

