const stripe = require('stripe')(process.env.STRIPE_TEST_SK);
const db = require('../models');

module.exports = StripeObj = {
  // List all customers
  // GET /api/stripe/customers
  getCustomers: (req, res) => {
    stripe.customers.list()
      .then((customers) => {
        console.log(customers);
        if (customers.data && customers.data.length > 0) {
          return res.status(200).json(customers.data);
        }
        return res.status(404).json({ customers: null })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err)
      })
  },
  // Create customer based on req.body key-values
  // POST /api/stripe/customers
  createCustomer: (req, res) => {
    stripe.customers.create(req.body)
      .then(customer => {
        console.log(customer);
        res.status(201).json(customer);
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      })
  },
  // Creates Product, chains Price and DB Project on creation
  // Post /api/stripe/products
  createProduct: (req, res) => {
    const { name, description } = req.body;
    stripe.products.create({ name, description })
      .then(product => {
        console.log(product);
        StripeObj.createPriceFromProduct(req, res, product)
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      })
  },
  // Part of Product Creation Chain
  createPriceFromProduct: (req, res, product) => {
    console.log('from createPriceFromProduct')
    console.log(product);
    stripe.prices.create({
      currency: 'usd',
      unit_amount: req.body.price,
      nickname: `${req.body.name} price`,
      product: product.id
    })
      .then(price => {
        console.log(price);
        createProductDB(req, res, product, price)
      })
      .catch(err => {
        console.log(err);
        res.json(err)
      })
  }
}

// Local Create DB Product with stripe id's
function createProductDB(req, res, product, price_s) {
  const prod_id = product.id;
  const price_obj = { price_id: price_s.id, amount: price_s.unit_amount };
  const { name, description, price, type, img_path } = req.body;
  let quantity = 0;
  if (req.body.quantity) {
    quantity = req.body.quantity;
  }
  const save_obj = {
    name,
    description,
    type,
    price,
    quantity,
    img_path,
    prod_id,
    price_ids: [price_obj]
  }
  db.Product.create(save_obj)
    .then((prod) => {
      console.log(prod);
      res.json(prod);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
}