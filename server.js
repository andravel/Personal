/**Servidor creado con express para nodejs**/

var express = require('express');
var app = express();
var path = require('path');
/*__dirname es un objeto global de angular para saber la ruta actual donde se ejecuta el js.**/
//app.use('/', express.static(__dirname + '/'));
console.log("Ruta Actual:"+__dirname);
app.use(express.static(path.resolve("./")));

app.use(function(err, req, res, next){
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  }
});

app.post('/serviciopost', function (req, res) {
  //TODO validar peticiones post  
  console.log("post")   
  
});

app.get('/servicioget', function (req, res) {
  console.log('get');
});

app.listen(8090, function () {
  console.log('listening on http://localhost:8090');
});

