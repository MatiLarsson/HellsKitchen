const { get } = require('./get.routes');
const { post } = require('./post.routes');

module.exports.Router = (req, res) => {
  const { method, url } = req;

  console.info({ method, url });

  switch (method) {
    case 'GET': {
      get(url, res);
    }; break;
    case 'POST': {
      post(url, res);
    }; break;
    default: {
      res.writeHead(404, { 'Content-Type': 'text/text' });
      res.end('Page not found');
    }
  }
}
