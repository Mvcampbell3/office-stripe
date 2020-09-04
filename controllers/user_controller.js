const db = require('../models');
module.exports = {
  getUsers: (req, res) => {
    db.User.find()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err)
      })
  },
  createUser: (req, res) => {
    const { email, username } = req.body;
    db.User.create({ email, username })
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => {
        res.status(422).json(err)
      })
  }
}