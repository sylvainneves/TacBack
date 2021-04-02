const router = require("express").Router();
const Reservation = require("../models/Reservation");

const verify = require("./verifyToke");
const { reservationValidation } = require("../validation");

router.get("/dispoHours", async (req, res) => {
  const toto = await Reservation.findOne({ name: "Batting" }).exec();
  res.send(toto.dispoHours);
});

router.post("/newReservation", async (req, res) => {
  //LETS VALIDATE THE DATA BEFORE MAKE Reservation
  const { error } = reservationValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  } else {
    //Create a new Reservation

    try {
      /* res.send(req.body.dateReservation); */
      const findedReservation = await Reservation.findOne({ name: "Batting" }).exec();

      /*     findedReservation.reservationsList.push(req.body);
      findedReservation.save(); */
      res.send({ findedReservation });
      return;
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

/* router.post("/", async (req, res) => {
  //LETS VALIDATE THE DATA BEFORE MAKE Reservation
  const { error } = reservationValidation(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  } else {
    //Create a new Reservation
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
}); */

module.exports = router;
