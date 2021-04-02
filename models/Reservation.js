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
  dureeReservation: {
    type: String,
    required: true,
    min: 2,
    max: 5,
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    min: 2,
    max: 255,
  },
  maxReservationPerHour: {
    type: Number,
    required: false,
  },
  dispoHours: {
    type: Array,
    required: false,
  },
  reservationsList: [newReservationSchema],
});

module.exports = mongoose.model("Reservation", reservationSchema);
