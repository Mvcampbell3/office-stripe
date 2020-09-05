const mongoose = require('mongoose');
const Scehma = mongoose.Schema;

const UserSchema = new Scehma({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cus_id: {
    type: String,
    default: 'none'
  },
  current_cart: [
    {
      type: Scehma.Types.ObjectId,
      ref: 'Product',
      default: []
    }
  ]
})

module.exports = User = mongoose.model('User', UserSchema);