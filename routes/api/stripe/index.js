const router = require('express').Router();
const stripe_controller = require('../../../controllers/stripe_controller');
router.get('/', (req, res) => {
  res.json({ ok: true, place: req.originalUrl })
})

router.get('/customers', stripe_controller.getCustomers)

module.exports = router;