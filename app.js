var http = require('http');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/about', function(req,res) {
  res.render('pages/about');
})

app.get('/*/*', function(req, res) {
  res.render('pages/categories' + req.path);
});

setInterval(function() {
  http.get('https://schwals.herokuapp.com/');
}, 300000);

// listen for requests
var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
