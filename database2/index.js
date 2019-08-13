const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mvp', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose is connected'));

module.exports = db;
