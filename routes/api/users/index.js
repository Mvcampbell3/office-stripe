const router = require('express').Router();
const user_controller = require('../../../controllers/user_controller');
router.route('/')
  .get(user_controller.getUsers)
  .post(user_controller.createUser)

module.exports = router;