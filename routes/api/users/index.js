const router = require('express').Router();
const db = require('../../../models')

router.route('/')
  .get((req, res) => {
    db.User.find()
      .then(users => res.json(users))
      .catch(err => res.json(err))
  })

module.exports = router;