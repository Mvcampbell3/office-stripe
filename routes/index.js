const router = require('express').Router();
const api_routes = require('./api');

router.use('/api', api_routes)

router.get('/', (req, res) => {
  console.log('route hit')
  res.json({ ok: true })
})

module.exports = router;