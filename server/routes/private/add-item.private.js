const Router = require('express').Router();
const jwtAuth = require('../../auth/jwt-auth');
const ItemModel = require('../../mongodb/item-schema');
const jwt = require('jsonwebtoken');
const joiAddValidator = require('../../auth/validation/add-item.validation');

Router.post('/', jwtAuth, async (req, res) => {
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

module.exports = Router;
