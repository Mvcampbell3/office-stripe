const stripe = require('stripe')(process.env.STRIPE_TEST_SK);
console.log(process.env.STRIPE_TEST_SK);

module.exports = {
  getCustomers: (req, res) => {
    console.log(process.env.STRIPE_TEST_SK);
    stripe.customers.list()
      .then((customers) => {
        console.log(customers);
        res.status(200).json(customers);
      })
      .catch(err => {
        // console.log(err);
        res.status(500).json(err)
      })
  }
}