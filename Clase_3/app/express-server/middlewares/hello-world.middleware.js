const HelloWorldMiddleware = (req, res) => {
  res.status(req.status).json({ message: req.message });
}

module.exports = HelloWorldMiddleware;