const express = require('express');
const { getAll } = require('./controllers/book.controller');
const app = express();

app.use(express.json());

app.get('/books', getAll);

module.exports = app;