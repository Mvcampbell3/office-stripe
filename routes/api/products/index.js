const product_controller = require('../../../controllers/product_controller');
const router = require('express').Router();

router.route('/')
  .get(product_controller.getProducts)

module.exports = router;