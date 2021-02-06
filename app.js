var logger = require('morgan');
var express = require('express');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
var indexRouter = require('./routes/index');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use('/', indexRouter);
app.use('/users', require('./routes/users'));

const port = 3030;

var mongoDB =
  'mongodb+srv://ashwith:ashwith1997@cluster0.1dvgq.mongodb.net/testing?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => {
  console.log('created');
});

module.exports = app;
