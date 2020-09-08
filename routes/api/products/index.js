const product_controller = require('../../../controllers/product_controller');
const router = require('express').Router();

router.use('*', (req, res, next) => {
  console.log(req.originalUrl);
  next()
})

router.route('/')
  .get(product_controller.getProducts)

router.route('/type/:type')
  .get(product_controller.getTypeProduct)

module.exports = router;