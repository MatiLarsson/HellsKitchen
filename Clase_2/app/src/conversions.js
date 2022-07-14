const converter = require('temperature-unit-converter-ctof-ftoc');
const urldecode = require('./urldecode');

module.exports.getConversionResult = (url) => {
  const { type, value } = urldecode.urlDecode(url);

  return (type === 'ctof') ? converter.CtoF(value) : converter.FtoC(value);
}