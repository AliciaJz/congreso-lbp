var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const cors           = require("cors");
const authController = require("./routes/authController");
const session        = require("express-session");
const passport       = require("passport");

var index = require('./routes/index');
var users = require('./routes/users');
var classes = require('./routes/classes');
var conferences = require('./routes/conferences');

var app = express();
// app.use(require("cors")());

// require('mongoose').connect('mongodb://localhost/lbpconf')
require('mongoose').connect('mongodb://lbp:lbp@ds113169.mlab.com:13169/lbp')
  .then(console.log("Base de daos conectada!!"))

  var corsOptions = {
    origin: true,
    credentials: true
  };
  app.use(cors(corsOptions));

  app.use(express.static(path.join(__dirname, 'public')));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: "lbp",
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 2419200000 }
}));

// Passport configuration
require("./config/passport")(passport,app);

app.use('/', index);
app.use('/api/auth', authController);
app.use('/api/users', users);
app.use('/api/classes', classes);
app.use('/api/conferences', conferences);

app.all('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.all('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
 });

module.exports = app;
