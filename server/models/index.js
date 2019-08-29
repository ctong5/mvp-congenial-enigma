// const db = require('../../database/index');
const db = require('../../database2/index');
const User = require('../../database2/User');
const bcrypt = require('bcryptjs');

module.exports = {
  // ===================
  // MONGOOSE
  // ===================

  // WITHOUT HASHING ===========
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

 // WITH HASHING ===============
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
            res.status(201).send('newUser email and password saved')
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
    console.log(`comparing passwords: candidatePassword: ${candidatePassword} vs. hash: ${hash}`)
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
      if (err) {
        console.log("pw and hash do NOT match. Err: ", err);
        callback(err);
      } else {
        console.log("pw and hash DO match. Confirmed isMatch: ", isMatch)
        callback(null, isMatch);
      }
    });
  },
}