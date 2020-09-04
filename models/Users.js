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
  }
})

module.exports = User = mongoose.model('User', UserSchema);