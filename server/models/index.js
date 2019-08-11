const db = require('../../database/index');

module.exports = {
  createUser: (req, res) => {
    const query = `INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)`;
    // const values = [req.body.params.firstname, req.body.params.lastname, req.body.params.email, req.body.params.password];
    const values = ['Elmer', 'Fudd', 'wabbitseason@looneytunes.com', 'bevewyvewyquiet'];
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