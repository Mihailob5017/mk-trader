const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');
//  importing routes
const SignUp = require('./routes/sign-up.public');
const SignIn = require('./routes/sign-in.public');
const Store = require('./routes/private/store.private');
const Items = require('./routes/items.public');
const GetUser = require('./routes/private/profile.private');
const Cart = require('./routes/private/cart.private');

//  middleware
const app = express();
const PORT = process.env.PORT || 5000;
const DB_CONNECT = process.env.MONGODB;
mongoose.connect(
  DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => {
    console.log('MongoDb Connected');
  }
);
app.use(cors());
app.use(express.json());

//  routes
app.use('/items', Items);
app.use('/signup', SignUp);
app.use('/signin', SignIn);
app.use('/store', Store);
app.use('/user', GetUser);
app.use('/cart', Cart);

app.listen(PORT, () => {
  console.log('server started on port ' + PORT);
});
