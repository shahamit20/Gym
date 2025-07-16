var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressSessoin = require('express-session')
const cors = require('cors');
var authRouter = require('./routes/auth');
var usersRouter = require('./model/users');
var indexRouter = require('./routes/index');
const passport = require('passport');


var app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressSessoin({
  resave:false,
  saveUninitialized: false,
  secret:'hello secret',
   cookie: {
    sameSite: 'lax',
    secure: false, // set true in production (HTTPS)
  }
}))

app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRouter);
app.use('/users', usersRouter);
app.use('/index',indexRouter)

// catch 404 and forward to error handler
// Handle 404 - Route Not Found
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});



// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
