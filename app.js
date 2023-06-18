var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://bbd:admin@localhost:5432/myapp')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clientsRouter = require('./routes/clients');
var ordersRouter = require('./routes/orders');
var locationRouter = require('./routes/location');
var photographRouter = require('./routes/photograph');
var phs_typeRouter = require('./routes/phs_type');
var phsRouter = require('./routes/phs');

var app = express();

session          = require("./session.js")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
    req.db = db;
    next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clients', clientsRouter);
app.use('/phs', phsRouter);
app.use('/orders', ordersRouter);
app.use('/location', locationRouter);
app.use('/photograph', photographRouter);
app.use('/phs_type', phs_typeRouter);


var api      = require('./routes/api');
app.use('/api', api);
var api_auth = require('./routes/api/auth');
api.use('/auth', api_auth);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

db.one('SELECT $1 AS value', 123)
.then((data) => {
  console.log('DATA:', data.value)
})
.catch((error) => {
  console.log('ERROR:', error)
})

module.exports = app;
