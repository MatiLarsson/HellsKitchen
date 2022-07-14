const conversions = require('./conversions');
const urldecode = require('./urldecode');

module.exports.post = (url, res) => {
  const path = urldecode.pathDecode(url);

  switch (path) {
    case '/': {
      res.writeHead(200, { 'Content-Type': 'text/text' });
      res.end(conversions.getConversionResult(url));
    }; break;
  }
}