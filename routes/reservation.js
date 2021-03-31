const router = require("express").Router();
const Reservation = require("../models/Reservation");
const verify = require("./verifyToke");
const { reservationValidation } = require("../validation");

/* router.get("/", verify, async (req, res) => {
   // res.send(req.user);

  const toto = await User.findOne({ _id: req.user._id }).exec();

  res.send(toto);
}); */

router.get("/", async (req, res) => {
  /*   res.send(req.user); */

  const toto = await Reservation.findOne().exec();
  /*   const toto = await Reservation.findOne({ reservationHour: "2021-03-14T20:26:50.016+00:00" }).exec(); */

  res.send(toto);
});

router.post("/", async (req, res) => {
  //LETS VALIDATE THE DATA BEFORE MAKE Reservation
  const { error } = reservationValidation(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  } else {
    //Check if user already exist in database
    // const emailExist = await User.findOne({ email: req.body.email });

    /* if (emailExist) {
      return res.status(400).send("Email already exist");
    }

    //hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
 */

    //Create a new Registration
    const reservation = new Reservation({
      activite: req.body.activite,
      reservationDate: req.body.reservationDate,
      reservationHour: req.body.reservationHour,
      userId: req.body.userId,
    });
    try {
      const savedReservation = await reservation.save();
      res.send({ reservation: reservation });
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

module.exports = router;
