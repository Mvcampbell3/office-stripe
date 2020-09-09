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
    const { email, password } = req.body;
    bcrypt.hash(password, 15)
      .then(hash => {
        db.User.create({ email, password: hash })
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
  },
  loginUser: (req, res) => {
    const { email, password } = req.body;
    db.User.findOne({ email })
      .then(user => {
        if (user) {
          bcrypt.compare(password, user.password)
            .then(match => {
              console.log(match);
              if (match) {
                return jwtSign(req, res, user);
              }
              res.status(200).json(match);
            })
            .catch(err => {
              console.log(err);
              res.staus.json(500)
            })
        } else {
          res.status(404).json({ user: false })
        }
      })
  },
  returnUser: (req, res) => {
    db.User.findById(req.user.id).select('-password')
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

function jwtSign(req, res, user) {
  const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY, { expiresIn: '1d' });
  res.status(200).json({ loggedIn: true, token, id: user._id });
}