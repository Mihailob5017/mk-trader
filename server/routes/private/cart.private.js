const Router = require('express').Router();
const { getUpadatedCart } = require('../../helpers/cart-operations');
const jwtAuth = require('../../auth/jwt-auth');
const UserModel = require('../../mongodb/user-schema');
const jwt = require('jsonwebtoken');

Router.put('/add', jwtAuth, async (req, res) => {
  const token = req.headers['auth-token'];
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }
  try {
    const { _id } = jwt.verify(token, process.env.TOKEN);
    const userProfile = await UserModel.findOne({ _id });
    const newCartItems = getUpadatedCart(
      userProfile.cartItems,
      req.body.itemId
    );
    await UserModel.findOneAndUpdate(
      { _id },
      { $set: { cartItems: newCartItems } }
    );
    res.send('Item Succesfully Added To The Cart');
  } catch (error) {
    console.log(error);
    res.status(500).send('Something Went Wrong');
  }
});

Router.get('/items', jwtAuth, async (req, res) => {
  const token = req.headers['auth-token'];
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }
  try {
    const { _id } = jwt.verify(token, process.env.TOKEN);
    const userProfile = await UserModel.findOne({ _id });
    res.send(userProfile.cartItems);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something Went Wrong');
  }
});

Router.put('/clear', jwtAuth, async (req, res) => {
  const token = req.headers['auth-token'];
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }
  try {
    const { _id } = jwt.verify(token, process.env.TOKEN);
    await UserModel.findOneAndUpdate({ _id }, { $set: { cartItems: [] } });
    res.send('Cart Cleared');
  } catch (error) {
    console.log(error);
    res.status(500).send('Something Went Wrong');
  }
});














module.exports = Router;
