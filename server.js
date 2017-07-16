// REQUIREMENTS
var express = require('express');
var app = express();

// MIDDLEWARE
app.use(express.static('public'));

// ROUTEs

/* **** Used to test if route is working */
app.get("/", function(request, response) {
  // send back the response: 'Hello World'
  response.send('Hello World');
});


// SERVER START
app.listen(3000, function () {
  console.log("HTTP server listening at localhost:3000");
});


/* ********
Store Data API
******** */

var itemsForSale = [
  {
    itemName: 'Cozy Cone Alarm Clock',
    price: '$59.99',
    imgURL:''
  },
  {
    itemName: 'Dumbo Paiting',
    price: '$900.00',
    imgURL:''
  },
  {
    itemName: 'Vera Bradley Shoes',
    price: '$148.00'
    imgURL:''
  }
  {
    itemName: 'Minnie Mouse Bow',
    price: '$29.00'
    imgURL:''
  }
]
