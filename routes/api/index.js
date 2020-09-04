const router = require('express').Router();
const stripe_routes = require('./stripe');
const user_routes = require('./users')

router.use('/stripe', stripe_routes);

router.use('/users', user_routes)

router.get('/', (req, res) => {
  res.json({ ok: true, place: req.originalUrl })
})


module.exports = router;