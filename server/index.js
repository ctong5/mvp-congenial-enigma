const express = require('express');
const app = express();
const port = 4000;
const morgan = require('morgan');
const path = require('path');
const db = require('../database/index.js');
const controllers = require('./controllers/index');

app.use(morgan('dev'));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/test', (req, res) => {
  res.send(`hello from get ${port}`).status(200);
});

app.post('/', controllers.createUser);

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});