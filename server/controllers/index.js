const models = require('../models/index');

module.exports = {
  createUser: (req, res) => {
    models.createUser(req, res)
  }, 

  getUserByEmail: (req, res) => {
    models.getUserByEmail(req, res)
  }, 

  getUserById: (req, res) => {
    models.getUserById(req, res)
  }, 

  comparePassword: (candidatePassword, hash, cb) => {
    models.comparePassword(candidatePassword, hash, cb)
  }, 
}