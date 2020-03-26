const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

//  routes

//  middleware
const app = express();
const PORT = process.env.PORT || 5000;
const DB_CONNECT = process.env.MONGODB;
mongoose.connect(
  DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('MongoDb Connected');
  }
);

app.listen(PORT, () => {
  console.log('server started on port ' + PORT);
});
