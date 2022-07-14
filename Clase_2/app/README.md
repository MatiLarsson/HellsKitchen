# http-server

This is a simple HTTP server built with plain node.js used to handle req and res in interaction with my temp unit conversion npm package.

# Install

1. git clone https://github.com/MatiLarsson/http-server
2. cd app
3. npm i
4. npm start (to start the server on port 3000)

# Usage

1. curl -X GET http://localhost:3000/

// To get 'Welcome to my temperature converter app!' as the server response's body.

2. curl -X POST http://localhost:3000/?type={type}&value={value}

// Where conversion type is either ctof to convert from celsius to farenheit,or ftoc to convert from farenheit to celsius, and temperature value is a number. You will get the converted temperature as the server response's body.
