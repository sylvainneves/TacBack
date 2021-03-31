const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  activite: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  reservationDate: {
    type: Date,
    default: Date.now,
  },
  reservationHour: {
    type: Date,
    default: Date.now,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
