// const db = require('../../database/index');
const db = require('../../database2/index');
const User = require('../../database2/User');
const bcrypt = require('bcryptjs');

module.exports = {
  // ===================
  // MONGOOSE
  // ===================
  // createUser: (req, res) => {
  //   const email = req.body.email;
  //   const password = req.body.password1;
  //   const newUser = new User({ email, password });

  //   newUser.save((err) => {
  //     if (err) {
  //       console.log("error in createUser", err);
  //     } else {
  //     }
  //   });
  // },

  // attempt hashing
  createUser: (req, res) => {
    const email = req.body.email;
    const password = req.body.password1;
    const newUser = new User({ email, password });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        newUser.password = hash;
        newUser.save((err) => {
          if (err) {
            console.log("error in createUser", err);
          } else {
            console.log("newUser email and password saved")
          }
        });
      })
    })
  },

  getUserByEmail: (email, callback) => {
    const query = { email: email };
    User.findOne(query, callback);
  },

  getUserById: (id, callback) => {
    User.findById(id, callback);
  },
  
  comparePassword: (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
      if(err) throw err;
      callback(null, isMatch);
    });
  },

  // ===================
  // POSTGRESQL
  // ===================
  // createUser: (req, res) => {
  //   const query = `INSERT INTO users (email, password) VALUES ($1, $2)`;
  //   console.log('req.body', req)
  //   const values = [req.body.email, req.body.password];
  //   db.query(query, values, (err) => {
  //     if (err) {
  //       console.log('err at models post:', err);
  //     } else {
  //       console.log('success at models post');
  //       res.sendStatus(201);
  //     }
  //   });
  // }
}