const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');
//  importing routes
const SignUp = require('./routes/sign-up.public');
const SignIn = require('./routes/sign-in.public');
const AddItem = require('./routes/private/add-item.private');

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
app.use(cors());
app.use(express.json());

//  routes
app.use('/signup', SignUp);
app.use('/signin', SignIn);
app.use('/add', AddItem);

app.listen(PORT, () => {
  console.log('server started on port ' + PORT);
});
