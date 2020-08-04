const Router = require("express").Router();
const JoiSignUpValidator = require("../auth/validation/sign-up.validation");
const signUpModel = require("../mongodb/user-schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
Router.post("/", async (req, res) => {
  //  Validating the data using Joi
  const { error } = await JoiSignUpValidator.validate(req.body);
  if (error) {
    res
      .status(400)
      .send("Joi Sign-Up Validation Error:The data you entered is invalid!");
    console.error(error);
  }

  //  Geting all the input data
  const { username, email, password } = req.body;

  //    Checking if the username already exists
  const doesUserExist = await signUpModel.findOne({ username });
  if (doesUserExist)
    res
      .status(400)
      .send("Sign-Up Error:Username already exists,try something else");

  //    Checking if the email already exists
  const isEmailTaken = await signUpModel.findOne({ email });
  if (isEmailTaken)
    res.status(400).send("Sign-Up Error:Email is already taken");

  //    hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //    We are overwriting so we can just spread it later
  const inputObject = Object.assign({}, req.body, { password: hashedPassword });
  const newUser = new signUpModel({ ...inputObject });

  //    Storing the Object to MongoDb
  try {
    await newUser.save();
    const user = await signUpModel.findOne({ email });
    const token = jwt.sign({ _id: user.id }, process.env.TOKEN);
    res.header("auth-token", token).send(token);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong in saving a user to mongo",
      error,
    });
  }
});

module.exports = Router;
