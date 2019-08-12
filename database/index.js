const { Pool } = require('pg');

const pool = new Pool({
  user: 'cassandratong',
  host: 'localhost',
  database: 'mvp',
  password: '',
});

const query = `
CREATE TABLE IF NOT EXISTS users (
  user_id INT GENERATED BY DEFAULT AS IDENTITY,
  email TEXT,
  password TEXT,
  PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS favoritehikes (
  id INT GENERATED BY DEFAULT AS IDENTITY,
  user_id INT,
  hike_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);`

pool.query(query, (err, results) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Users and Hikes tables created')
  }
})

module.exports = pool;

