const Router = require('express').Router();
const jwtAuth = require('../../auth/jwt-auth');
const UserModel = require('../../mongodb/user-schema');
const jwt = require('jsonwebtoken');

Router.get('/', jwtAuth, async (req, res) => {
  const token = req.headers['auth-token'];
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }
  try {
    const { _id } = jwt.verify(token, process.env.TOKEN);
    const userProfile = await UserModel.findOne({ _id });
    res.send(userProfile);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something Went Wrong');
  }
});
Router.delete('/delete', jwtAuth, async (req, res) => {
  const token = req.headers['auth-token'];
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }
  try {
    const { _id } = jwt.verify(token, process.env.TOKEN);
    await UserModel.findOneAndDelete({ _id });
    res.send('Account Successfuly Deleted');
  } catch (error) {
    console.log(error);
    res.status(500).send('Something Went Wrong');
  }
});

Router.put('/edit', jwtAuth, async (req, res) => {
  const token = req.headers['auth-token'];
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }
  try {
    const { _id } = jwt.verify(token, process.env.TOKEN);
    const { paramName, paramValue } = req.body;
    await UserModel.findOneAndUpdate(
      { _id },
      { $set: { [paramName]: paramValue } }
    );
    res.send('Successfully Updated ');
  } catch (error) {
    console.log(error);
    res.status(500).send('Something Went Wrong');
  }
});

module.exports = Router;
