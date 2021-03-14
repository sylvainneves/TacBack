const router = require("express").Router();
const User = require("../models/User");
const { registerValidation } = require("../validation");

router.post("/register", async (req, res) => {
  //LETS VALIDATE THE DATA BEFORE MAKE USER

  /*   const { error } = schema.validate(req.body); */

  const { error } = registerValidation(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  } else {
    //Check if user already exist in database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      return res.status(400).send("Email already exist");
    }
    //Create a new user
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

router.post("/login");

module.exports = router;
