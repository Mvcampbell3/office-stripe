const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
    const { email, username, password } = req.body;
    bcrypt.hash(password, 15)
      .then(hash => {
        db.User.create({ email, username, password: hash })
          .then(user => {
            res.status(201).json(user);
          })
          .catch(err => {
            res.status(422).json(err)
          })
      })
      .catch(err => {
        console.log(err);
        res.json(500).json(err)
      })
  }
}