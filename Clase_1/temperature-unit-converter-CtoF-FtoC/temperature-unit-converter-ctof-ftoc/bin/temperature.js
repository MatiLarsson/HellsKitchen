#!/usr/bin/env node

const converter = require('../index.js');


if (process.argv[2].toLowerCase() === 'ctof') {
  console.log(converter.CtoF(Number(process.argv[3])))
} else if ((process.argv[2].toLowerCase() === 'ftoc')) {
  console.log(converter.FtoC(Number(process.argv[3])))
} else {
  console.log('Please read instructions and come back !')
}