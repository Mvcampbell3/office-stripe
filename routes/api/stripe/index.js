const router = require('express').Router();
const stripe_controller = require('../../../controllers/stripe_controller');
router.get('/', (req, res) => {
  res.json({ ok: true, place: req.originalUrl })
})

router.route('/customers')
  .get(stripe_controller.getCustomers)
  .post(stripe_controller.createCustomer)

module.exports = router;