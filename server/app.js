var express = require('express');
var parser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 9000);

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res){
  res.send('message from server');
});

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Server listening on port '+app.get('port'));
}

module.exports.app = app;
