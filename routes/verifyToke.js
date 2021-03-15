const jwt = require("jsonwebtoken");

module.exports = function auth(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verifier = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verifier;
    next();
  } catch (error) {
    res.status(400).send("invalid token");
  }
};
