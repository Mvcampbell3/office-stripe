const stripe = require('stripe')(process.env.STRIPE_TEST_SK);

module.exports = {
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
  }
}