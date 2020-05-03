const Router = require('express').Router();
const {
  getUpadatedCart,
  removeFromCart,
  checkIfInCart,
} = require('../../helpers/cart-operations');
const jwtAuth = require('../../auth/jwt-auth');
const UserModel = require('../../mongodb/user-schema');
const jwt = require('jsonwebtoken');

//  Adding the item to the cart
Router.put('/add', jwtAuth, async (req, res) => {
  //  Checking for the token
  const token = req.headers['auth-token'];
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }

  try {
    //  Checking if there already is an item to the cart,and if not,adding one
    const { _id } = jwt.verify(token, process.env.TOKEN);
    const userProfile = await UserModel.findOne({ _id });
    if (!checkIfInCart(userProfile, req.body.itemId)) {
      const newCartItems = getUpadatedCart(
        userProfile.cartItems,
        req.body.itemId
      );

      await UserModel.findOneAndUpdate(
        { _id },
        { $set: { cartItems: newCartItems } }
      );
      res.send('Item Succesfully Added To The Cart');
    } else {
      res.send('Item already in cart');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Something Went Wrong');
  }
});
//  Removing an item from the cart
Router.delete('/delete', jwtAuth, async (req, res) => {
  const { itemId } = req.body;
  const token = req.headers['auth-token'];
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }
  try {
    const { _id } = jwt.verify(token, process.env.TOKEN);
    const userProfile = await UserModel.findOne({ _id });
    const newCartItems = removeFromCart(userProfile.cartItems, itemId);
    await UserModel.findOneAndUpdate(
      { _id },
      { $set: { cartItems: newCartItems } }
    );
    res.send('Successfully removed from cart!');
  } catch (error) {
    console.log(error);
    res.status(500).send('Something Went Wrong');
  }
});
//  Getting all te items from the cart
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

//  Clearing the cart
Router.post('/clear', jwtAuth, async (req, res) => {
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
