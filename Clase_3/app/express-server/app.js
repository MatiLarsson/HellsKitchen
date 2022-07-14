const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;

// Notas de clase:

// En este caso, el profesor creó el server con express-generator con el siguiente comando:
// npx express-generator --no-view express-server --git
// Ver opciones para creación de plantilla en https://www.npmjs.com/package/express-generator

// Lo que está en app.js se ejecuta con cada request
// Lo que está en www se ejecuta al levantar el servidor (solo una vez)
