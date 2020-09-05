const db = require('../models');
const stripe_controller = require('./stripe_controller');

module.exports = {
  getProducts: (req, res) => {
    db.Product.find()
      .then(products => res.status(200).json(products))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  },
  getOneProduct: (req, res) => {

  },
  createProduct: (req, res) => {
    const { name, description, price } = req.body;
    let quantity = 0;
    if (req.body.quantity) {
      quantity = req.body.quantity
    }
    const prod_id = 'THISISPRODUCTID';
    const price_obj = { id: 'THISISPRICEID', amount: 45 };
    db.Product.create({ name, description, price, quantity, price_ids: [price_obj] })
      .then(product => {
        res.status(200).json(product);
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      })
  }
}