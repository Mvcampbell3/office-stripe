const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  try {
    const token = req.headers["authorization"].split(' ')[1];
    const auth = jwt.verify(token, process.env.JWT_KEY);
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({ authorized: false })
  }
}