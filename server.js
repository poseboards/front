var express = require('express');
var logger = require('morgan');
var hbs = require('./config/handlebars');
var usersRouter = require('./routes/users-router');

var root = __dirname + '/public';
var lib = __dirname + '/lib';


var app = express();

app.use('/users', usersRouter);


app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);
app.use(express.static(root));
app.use(express.static(lib));
app.use(logger('dev'));

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Server is running on port: Andre Tré-th000usand");
});