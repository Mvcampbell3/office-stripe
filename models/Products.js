const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StripePriceSchema = new Schema({ price_id: String, amount: Number })

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  mission: {
    type: String,
    required: true
  },
  manned: {
    type: Boolean,
    required: true
  },
  img_path: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  prod_id: {
    type: String,
    required: true
  },
  price_ids: {
    type: [StripePriceSchema],
    default: undefined
  }
})

module.exports = Product = mongoose.model('Product', ProductSchema)