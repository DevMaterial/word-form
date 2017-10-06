var express = require('express');

var app = express();

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
})

// listen for requests

const port = process.env.PORT || 3000;
app.listen(port);
