const Router = require('express').Router();
const jwtAuth = require('../../auth/jwt-auth');
const UserModel = require('../../mongodb/user-schema');
const ItemModel = require('../../mongodb/item-schema');
const jwt = require('jsonwebtoken');
const { appendObjectList } = require('../../helpers/item-handler');
//  Gets the profile
Router.get('/', jwtAuth, async (req, res) => {
  //  Checking for the token
  const token = req.headers['auth-token'];
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }
  try {
    //  Geting the id from the token & then getting the profile from the id
    const { _id } = jwt.verify(token, process.env.TOKEN);
    const userProfile = await UserModel.findOne({ _id });
    res.send(userProfile);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something Went Wrong');
  }
});
//  Delete the profile
Router.delete('/delete', jwtAuth, async (req, res) => {
  //  Checking for the token
  const token = req.headers['auth-token'];
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }
  //  Getting the id from the token and getting the user from the id
  try {
    const { _id } = jwt.verify(token, process.env.TOKEN);
    await UserModel.findOneAndDelete({ _id });
    res.send('Account Successfuly Deleted');
  } catch (error) {
    console.log(error);
    res.status(500).send('Something Went Wrong');
  }
});
//  Editing a specific parameter exmp:[username,email,password,profile-pic,etc]
Router.put('/edit', jwtAuth, async (req, res) => {
  //  Checking for the token
  const token = req.headers['auth-token'];
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }
  //  Getting the id from the token & the profile from the id
 
  try {
    const { _id } = jwt.verify(token, process.env.TOKEN);
    const { paramName, paramValue } = req.body;
    console.log(paramName)
    console.log(paramValue)
    //  We are putting paramName in [] because that way the value of the paramName is being changed,otherwise we would set
    //  paramName:erjrgerjg witch would not change the value,this way we are changing the value of the paramName for exmp
    //  if paramName is "firstname" , the update will go like this --> firstname:qijeqwje
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

//Get all the scored Items
Router.get('/scored', jwtAuth, async (req, res) => {
  const token = req.headers['auth-token'];
  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }
  try {
    const { _id } = jwt.verify(token, process.env.TOKEN);
    const profile = await UserModel.findOne({ _id });
    res.send(profile.scoredItems);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something Went Wrong');
  }
});

//Update all of the scored Items

Router.post('/scored', jwtAuth, async (req, res) => {
  const token = req.headers['auth-token'];
  const newItems = req.body.scored;

  if (!token) {
    res.status(401).send('Auth Error:You havent entered a token !');
  }
  try {
    const { _id } = jwt.verify(token, process.env.TOKEN);
    const { scoredItems } = await UserModel.findOne({ _id });
    await UserModel.findOneAndUpdate(
      { _id },
      {
        $set: {
          scoredItems: appendObjectList(scoredItems, newItems),
        },
      }
    );
    for (const item in newItems) {
      await ItemModel.findOneAndUpdate(
        { _id: item },
        { $inc: { score: newItems[item] } }
      );
    }
    res.send('successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = Router;
