const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  try {
    console.log(req.headers)
    const token = req.headers["authorization"].split(' ')[1];
    console.log(token)
    const auth = jwt.verify(token, process.env.JWT_KEY);
    console.log(auth);
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({ authorized: false })
  }
}