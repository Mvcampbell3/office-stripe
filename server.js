const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config()
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected')
  })
  .catch((err) => {
    console.log(err)
  })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`server is running on http://localhost:3001`));