const { Pool } = require('pg');

const pool = new Pool({
  user: 'cassandratong',
  host: 'localhost',
  database: 'hikes',
  password: '',
});

module.exports = pool;

