const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sequelize = require('./database/database')
const debug = require('debug')('express-api:server')

const indexRouter = require('./routes/index');
const Router = require('./routes/router');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/router', Router);

//  Start database connection
sequelize.sync()
  // eslint-disable-next-line no-console
  .then(() => (console.log('Connected to database')))
  .catch((reason) => {
    // eslint-disable-next-line no-console
    console.log('Error connecting to database')
    debug(reason)
  })

module.exports = app;
