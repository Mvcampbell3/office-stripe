const router = require('express').Router();
const user_controller = require('../../../controllers/user_controller');
const auth = require('../../../middleware/auth');

router.route('/')
  .get(user_controller.getUsers)
  .post(user_controller.createUser);

router.route('/login')
  .post(user_controller.loginUser);

router.route('/check')
  .get(auth, user_controller.returnUser);

module.exports = router;