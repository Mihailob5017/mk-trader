const Router = require('express').Router();
const jwtAuth = require('../../auth/jwt-auth');
const ItemModel = require('../../mongodb/item-schema');
const UserModel = require('../../mongodb/user-schema');
const jwt = require('jsonwebtoken');
const joiAddValidator = require('../../auth/validation/add-item.validation');
const { checkIfInCart } = require('../../helpers/cart-operations');

Router.post('/add', jwtAuth, async (req, res) => {
  //  Checking if the user has the access to this private page
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }
  //  Checking if the user has entered all the right information
  const { error } = await joiAddValidator.validate(req.body);
  if (error) {
    res
      .status(400)
      .send('Joi Add-Item Validation Error:The data you entered is invalid!');
    console.log(error);
  }

  try {
    //Verfying that the item has the token
    const verified = jwt.verify(token, process.env.TOKEN);
    const itemModel = new ItemModel({
      ownerId: verified._id,
      score: 0,
      ...req.body
    });
    //  Adding the item to store
    await itemModel.save();
    res.send('Item Succesffuly Added to the Store');
  } catch (error) {
    res.status(401).send('Invalid Token,Access Denied');
    console.error(error);
  }
});

//  Deletes the item from the store/mongodb
Router.delete('/delete', jwtAuth, async (req, res) => {
  //  Checking if the user has the token
  const { itemId } = req.body;
  const token = req.headers['auth-token'];
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }

  try {
    //  Checking if the some of the other users has added the item to the cart,in witch case it cant delete it from the store till the user empties the cart.
    const allUsers = await UserModel.find();
    if (checkIfInCart(allUsers, itemId))
      res.send(
        'Cant remove the item from the store, some of users already added it to the cart!'
      );
    else {
      await ItemModel.findOneAndDelete({ _id: itemId });
      res.send('Item successfuly removed!');
    }
  } catch (error) {
    res.status(500).send('Something went wrong');
    console.log(error);
  }
});

module.exports = Router;
 