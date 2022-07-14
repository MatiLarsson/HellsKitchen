const number2text = require('number2texto');

function CtoF (temp) {
  const farenheit = Math.round(temp * 9 / 5 + 32);
  const text = number2text(farenheit, 'es');
  const output = `La temperatura es de ${farenheit}°F (${text}) grados fahrenheit`;
  return output;
}

function FtoC (temp) {
  const celsius = Math.round((temp - 32) * 5 / 9);
  const text = number2text(celsius, 'es');
  const output = `La temperatura es de ${celsius}°C (${text}) grados celsius`;
  return output;
}

module.exports = {
  CtoF,
  FtoC
}