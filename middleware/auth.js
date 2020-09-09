const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  try {
    const token = req.headers["authorization"].split(' ')[1];
    const auth = jwt.verify(token, process.env.JWT_KEY);
    console.log(auth)
    req.user = { id: auth.id };
    next();
  } catch (error) {
    console.log('web token failed verification');
    res.status(204).json({ user: false })
  }
}