const router = require('express').Router();
const stripe_routes = require('./stripe');


router.use('/stripe', stripe_routes);

router.get('/', (req, res) => {
  res.json({ ok: true, place: req.originalUrl })
})


module.exports = router;