const mongoose = require("mongoose");

const newReservationSchema = new mongoose.Schema({
  dateReservation: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  hourReservation: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("NewReservationSchema", newReservationSchema);
