var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var datos = fs.readFileSync("index.html");
var buf = new Buffer(datos);

app.get('/', function(request, response) {
  response.send( but.toString() );
  //buf.toString();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
