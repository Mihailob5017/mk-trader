const jwt = require("jsonwebtoken");

module.exports = auth = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) res.status(401).send("You do not have a token,access denied");
  try {
    const verified = jwt.verify(token, process.env.TOKEN);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).send("Invalid Token,Access Denied");
  }
};
