const router = require("express").Router();
const User = require("../models/User");
const verify = require("./verifyToke");

router.get("/", verify, async (req, res) => {
  /*   res.send(req.user); */

  const toto = await User.findOne({ _id: req.user._id }).exec();

  res.send(toto);
});

module.exports = router;
