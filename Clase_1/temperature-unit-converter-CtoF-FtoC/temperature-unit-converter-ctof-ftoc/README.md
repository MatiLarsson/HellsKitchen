
# Celsius to Farenheit converter (and vice versa)

Is a package for converting temperature units from Fahrenheit to Celsius and vice versa, returning the converted value as a number and text 'one-sentence' string format in spanish language (see usage for examples).


# Installation

$ npm i temperature-unit-converter-ctof-ftoc


# Usage

const converter = require('temperature-unit-converter-ctof-ftoc');

converter.CtoF(30); // Output: La temperatura es de 86°F (Ochenta y Seis) grados fahrenheit

converter.FtoC(86); // Output: La temperatura es de 27°C (Veintisiete) grados celsius

# NPX

- To convert Celsius to Farenheit:

npx temperature-unit-converter-ctof-ftoc {ctof} {temp}

- To convert Farenheit to Celsius:

npx temperature-unit-converter-ctof-ftoc {ftoc} {temp}
