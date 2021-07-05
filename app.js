var express = require('express');
var app = express();
var path = require('path');
require('./db_connection');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.listen(3000);
