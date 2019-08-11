const models = require('../models/index');

module.exports = {
  createUser: (req, res) => {
    models.createUser(req, res)
  }
}