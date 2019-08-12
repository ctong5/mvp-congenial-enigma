const db = require('../../database/index');

module.exports = {
  createUser: (req, res) => {
    const query = `INSERT INTO users (email, password) VALUES ($1, $2)`;
    console.log('req.body', req)
    const values = [req.body.email, req.body.password];
    db.query(query, values, (err) => {
      if (err) {
        console.log('err at models post:', err);
      } else {
        console.log('success at models post');
        res.sendStatus(201);
      }
    });
  }
}