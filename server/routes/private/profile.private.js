const Router = require('express').Router();
const jwtAuth = require('../../auth/jwt-auth');
const UserModel = require('../../mongodb/user-schema');
const jwt = require('jsonwebtoken');
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
    //  Wea are putting paramName in [] because that way the value of the paramName is being changed,otherwise we would set
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

module.exports = Router;
