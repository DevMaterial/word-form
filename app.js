var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.set('port', (process.env.PORT || 4000));
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

app.listen(app.get('port'), function(err) {
  console.log("Started listening on " + app.get('port'));
});
