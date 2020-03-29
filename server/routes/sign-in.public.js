const Router = require('express').Router();
const bcrypt = require('bcryptjs');
const JoiSignInValidator = require('../auth/validation/sign-in.validation');
const signInSchema = require('../mongodb/user-schema');
const jwt = require('jsonwebtoken');

Router.post('/', async (req, res) => {
  //  Validating the Sign-In data with Joi
  const { error } = await JoiSignInValidator.validate(req.body);
  if (error) {
    res
      .status(400)
      .send('Joi Sign-In Validation Error:The data you entered is invalid!');
    console.error(error);
  }
  const { email, password } = req.body;

  //    Checking if the email exists
  const doesEmailExist = await signInSchema.findOne({ email });
  if (!doesEmailExist) {
    res.status(400).send('Email Sign In Error');
  }
  //    Checking the Password
  const user = await signInSchema.findOne({ email });
  const isPassValid = await bcrypt.compare(password, user.password);
  if (!isPassValid) {
    res.status(400).send('The Password is Incorect');
  }
  //    Creating a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN);
  res.header('auth-token', token).send(token);
  res.send('Successfuly Signed In');
});

module.exports = Router;
