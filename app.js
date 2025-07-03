const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db.config');
const app = express();

//middlewares

app.use(express.json());
app.use(morgan('dev'));

connectDB;

module.exports = app;