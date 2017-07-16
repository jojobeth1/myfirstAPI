// REQUIREMENTS
var express = require('express');
var app = express();

// MIDDLEWARE
app.use(express.static('public'));

// ROUTES
app.get("/", function(request, response) {
  // send back the response: 'Hello World'
  response.send('Hello World');
});

// SERVER START
app.listen(3000, function () {
  console.log("HTTP server listening at localhost:3000");
});
