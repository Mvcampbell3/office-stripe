const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config()
const routes = require('./routes');
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static('./client/build'))
}

mongoose.connect(process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected mongo')
    app.listen(PORT, () => console.log(`server is running on http://localhost:3001`));
  })
  .catch((err) => {
    console.log(err)
  })