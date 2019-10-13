var express = require('express');
var expressLayouts = require('express-ejs-layouts');

var app = express();

app.set('view engine', 'ejs');

app.use(expressLayouts);

app.get('/', function(req, res) {
    res.render("index")
});

app.get('/hakkimda', function(req, res) {
    res.render("hakkimda")
});

app.listen(3000);
console.log("server çalışıyor")