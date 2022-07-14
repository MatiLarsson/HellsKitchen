const { validArgs } = require('../utils');

const validation = (req, res, next) => {
  const { status, message } = req.query;
  const formattedStatus = parseInt(status, 10);
  const errorMessage = validArgs(message, formattedStatus);

  if (!errorMessage) {
    req.status = formattedStatus;
    req.message = message;
    return next();
  }

  return res.status(400).json({ message: errorMessage });
}

module.exports = validation;