
module.exports.get = (url, res) => {
  switch (url) {
    case '/': {
      res.writeHead(200, { 'Content-Type': 'text/text' });
      res.end('Welcome to my temperature converter app!');
    }; break;
  }
}