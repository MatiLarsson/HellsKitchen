const express = require('express');
const router = express.Router();
const validation = require('../middlewares/validation.middleware');
const HelloWorldMiddleware = require('../middlewares/hello-world.middleware');


router
  .route('/')
    .get(
      validation,
      HelloWorldMiddleware
    );

module.exports = router;
