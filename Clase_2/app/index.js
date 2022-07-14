const http = require('http');
const routes = require('./src/routes');

const server = http.createServer((req, res) => {
  routes.Router(req, res);
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});

